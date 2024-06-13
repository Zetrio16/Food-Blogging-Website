import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom'
import Login from './component/auth/login'
import Register from './component/auth/register'
import Home from './component/Home/index'
import CardWithDetails from './component/recipeDetails/index'
import Nav from './component/Nav/Nav'
import Recipes from './component/recipes'
import About from './component/about/about'
import contact from './component/contact/contact'
import RecipeIngredient from './component/recipeShowIngredients/index'
import RecipeDetail from './component/recipes/recipeDetail'
import Error404 from './component/404'
import MyFavourite from './component/myFav'

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/auth/login' || location.pathname === '/auth/register';

  return (
    <>
      {!isLoginPage && <Nav />}
      <Routes>
        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/register' element={<Register />} />
        <Route exact path='/' element={<Home />} />
        <Route path='/recipeDetails' element={<CardWithDetails />} />
        <Route path='/recipeDetails/:id' element={<RecipeDetail />} />
        <Route path='*' element={<Error404/>} />
        <Route path='/recipes' Component={Recipes} />
        <Route path="/recipes/:id" element={<RecipeDetail/>}/>
        <Route path='/about' Component={About} />
        <Route path='/contact' Component={contact} />
        <Route path='/myFav' Component={MyFavourite}/>
      </Routes>
    </>
  );
}

export default App;