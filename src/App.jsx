
import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
// import ReusableForm from './components/ReusableForm/ReusableForm'
// import HooksForm from './components/HooksForm/HooksForm'
// import NameRef from './components/NameRef/NameRef'
// import Simpleform from './components/Simpleform/Simpleform'
// import Statefullform from './components/Statefullform/Statefullform'

function App() {

//   const handleSignupSubmit = data =>{
//     console.log(data)
   
// }

// const handleUpdateSubmit = data =>{
//   console.log(data)
// }


  

  return (
    <>
     
      <h1>Vite + React</h1>
      <Grandpa></Grandpa>
      {/* <Simpleform></Simpleform> */}
      {/* <Statefullform></Statefullform> */}
      {/* <NameRef></NameRef> */}
      {/* <HooksForm></HooksForm> */}
      {/* <ReusableForm formTitle={'Sign up'} handleSubmit={handleSignupSubmit}>
        <div>
          <h2>Sign up here</h2>
          <p>Make sure to give the right information</p>
        </div>
      </ReusableForm>
      <ReusableForm formTitle={'Profile'} submitBtnText={'update'} handleSubmit={handleUpdateSubmit}>
        <div>
          <h2>Profile information</h2>
          <p>fill up the form for your profile information</p>
        </div>
      </ReusableForm> */}
     
    </>
  )
}

export default App
