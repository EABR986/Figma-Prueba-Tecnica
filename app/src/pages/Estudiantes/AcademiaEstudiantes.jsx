import Base from '../../../components/Base/Base';
import Lista from '../../../components/Lista/Lista';
import Navigation from '../../../components/Navigation/Navigation';

function Estudiantes() {
  return (
    <>
      <Base />
      <div className="containers">
        <Navigation />
        <Lista />
      </div>
    </>
  );
}

export default Estudiantes;
