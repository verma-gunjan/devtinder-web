# DevTinder

- Created a vite + react application
- install tailwind css
- install daisyUI
- install react router
- create browser router
- inside browser router added routes component
- created route children for body
- created outlet in body component
- add footer
--------------------------------------------------------
- create login page
- install axios for api calling
- add cors in backend
- add {withCredentials: true} with api to set the cookie in the browser
------------- redux setup -----------------------
- install redux toolkit
- create a store named appStore , it will be contain the data globally
- wrap the root with <Provider> so the we can use the store data, provider i scoming from react-redux and store is coming from toolkit

Term	Meaning	Example
store	Global state container	configureStore(...)
slice	A piece of the store + its logic	createSlice(...)
reducer	Function to update state	increment, decrement
dispatch	Sends an action to the reducer	dispatch(increment())
useSelector	Reads data from the store	useSelector(state => state.counter)
Provider	Makes the store available in the whole app	<Provider store={store}>...</Provider>

- create slice name userSlice
- add reduce to store

-user should not be access other route without login
- if token is not present redirect user to login page
- for the logout when click on logout a action should be dispatch to remove user
      dispatch(removeUser());
      return navigate("/Login");

