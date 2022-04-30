import { useGetUser } from '../apollo/actions';
import Loading from '../components/Loading/AppLoading';
import Redirect from '../components/shared/Redirect'
import Navbar from '../components/Layout/Navbar/Navbar';
import Sidebar from '../components/Layout/Sidebar/SIdebar';
import { Section } from '../components/comman/Style';
export default (WrappedComponent, role, options = {ssr: false}) => {
  function WithAuth(props) {
    const { data: { getUser } = {}, loading, error } = useGetUser({fetchPolicy: 'network-only'});
  
console.log(error , "Error")

    if (
      !loading &&
      (!getUser || error) &&
      typeof window !== 'undefined'
    ) {
   
      localStorage.removeItem("jwtToken");

      return <Redirect to="/login" query={{message: 'NOT_AUTHENTICATED'}} />
    }

    // TODO: Send a message to login page
    if (getUser) {
      if (role && !role.includes(getUser.role)) {
        return <Redirect to="/login" query={{message: 'NOT_AUTHORIZED'}}/>
      }
      return  (
      <>
      <Navbar/>
      <Sidebar/>
      <Section>
      <WrappedComponent {...props} />
   
   </Section>
      </>
      )
    }

    return (
     <Loading/>
    )
   }


  return WithAuth;
}