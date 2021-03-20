import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { addBug, resolveBug } from "../bugs";
import configureStore from "../configureStore";

describe("bugsSlice", () => {
  let fakeAxios;
  let store;
  beforeEach(() => {
    store = configureStore();
    fakeAxios = new MockAdapter(axios);
  });

  const bugsSlice = () => store.getState().entities.bugs;

  it("should add the bug to the store if saved to the server", async () => {
    // Arrange
    const bug = { description: "a" };
    const savedBug = { ...bug, id: 1 };
    fakeAxios.onPost("/bugs").reply(200, savedBug);

    // Act
    await store.dispatch(addBug(bug));

    // Assert
    expect(bugsSlice().list).toContainEqual(savedBug);
  });

  it("should not add the bug to the store if it's not saved to the server", async () => {
    // Arrange
    const bug = { description: "a" };
    fakeAxios.onPost("/bugs").reply(500);

    // Act
    await store.dispatch(addBug(bug));

    // Assert
    expect(bugsSlice().list).toHaveLength(0);
  });

  it("should mark the bug as resolved if saved to the server", async () => {
    //arrange
    fakeAxios.onPatch("/bugs/1").reply(200, { id: 1, resolved: true });
    fakeAxios.onPost("/bugs").reply(200, { id: 1, resolved: false });

    //act
    await store.dispatch(addBug({}));
    await store.dispatch(resolveBug(1));

    //assert
    expect(bugsSlice().list[0].resolved).toBe(true);
  });
});
