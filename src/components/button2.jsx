import Button from "react-bootstrap/Button";

const Button2 = ({ buttonText, violeta, setVioleta }) => {
  return (
    <Button 
      variant="primary" 
      onClick={() => setVioleta(!violeta)}
    >
      {buttonText}
    </Button>
  );
};

export default Button2;