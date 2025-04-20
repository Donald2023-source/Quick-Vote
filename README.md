# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---------------------GUIDE------------------------------------

------------------- Authentication --------------

**Auth-Student**: In the auth folder check for signup.jsx, a function has been created to handle signup called "handleSubmit" all you need to do is to pass in the endpoint. If everything goes well you should have a success message in the console. I believe a vaidation was created for bingham email. If user has been authenticated you can add this under the condtional statement
if(response.status === 200){
const router = useRouter
router.push('/student-dashboard')
}

**Auth-Cooperation**: Same goes to the copperative signup
**Auth-Organization**: Organization will have to enter name and unique id.

----------------------------Dashboard ---------------------------

**Student Dashboard**:
a. In the Dashboard folder, the student.jsx file contains a custom hook called useFetch, as it is described there pass in the data of whatever you want to fetch
b. Navigate to the Barchart.jsx and follow the instructions

**Cooperative Dashboard**
Use the instructions and process used in the student Dashboard

**Organization Dashboard**
a. Fetch Posts and pass to do different charts.
b. Instead of fetching data directly in the Chart Component, fetch it in the /Dashboard/Organization.jsx and dynamically pass it to the chart component as a prop

------------------Vote-------------------------

1. Navigate to /Pages/Vote
   Use the custom useFetch Hook to fetch Candidates.
2. In the candidate Card component, pass in the voting logic in the handleCLick function.
