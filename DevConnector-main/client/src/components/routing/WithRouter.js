import { useNavigate } from 'react-router-dom';

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const Navigate = useNavigate();
    
    return (
      <Component
        Navigate={Navigate}
        {...props}
        />
    );
  };
  
  return Wrapper;
};