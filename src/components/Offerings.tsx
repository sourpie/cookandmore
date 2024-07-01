import { Link } from "react-router-dom";
import { linkData } from "../linkData";

interface RowProps {
  title: string;
  logo: string;
  href: string;
}

const Row = (props: RowProps) => (
  <Link to={props.href}>
    <div className="flex py-2 px-10 w-[26rem] justify-around  items-center rounded-2xl border-2 hover:scale-105">
      <img className="rounded-full" src={props.logo} alt={props.title} width={80} height={80}/>
      <h3>{props.title}</h3>
    </div>
  </Link>
);

const Offerings = () => {
  return (
    <div className="my-10  flex flex-col justify-center items-center">
      <h1 className="text-2xl w-2/4 text-center text-bold mb-3">You can book the Experience directly with us by clicking on the "Reach Us” Tab or book it by clicking on any of the following several platforms listed below.
<br/> <br/>
The quality of the Experience and hospitality offered to the Guests remain unchanged no matter where & when you book.</h1>
      <div className="flex mt-5 flex-wrap flex-col justify-center items-center gap-3">
        {linkData.map((item, index) => {
          return <Row key={index} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Offerings;
