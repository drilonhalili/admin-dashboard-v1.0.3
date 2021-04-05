export const signUp = (data) => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  dispatch({
    type: "AUTH_START",
  });
  try {
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password);
    console.log(res.user.uid);

    await firestore.collection("users").doc(res.user.uid).set({
      firstName: data.firstName,
      lastName: data.lastName,
    });
    dispatch({ type: "AUTH_SUCCESS", payload: err.message });
  } catch (err) {
    dispatch({ type: "AUTH_FAIL", payload: err.message });
  }
  dispatch({
    type: "AUTH_END",
  });
};
