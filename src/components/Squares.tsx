import {NUM_LIST} from "../data";
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useQueryState from '../utils/useQueryState';
import Answer from "./Answer.tsx";

const Squares = () => {

    const { setQuery } = useQueryState();
    const location = useLocation();
    const [question] = useState(location.state);
    const navigate = useNavigate();
    const handleClick = (key,number) => {
        setQuery('s', key);
    };

    return (
        <div>
            <div className="container">
                <div className="row mt-4">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex justify-content-center">
                                    <img className="rounded-circle" width="70" height="70" src="https://mintheinkha-lathtaukbaydin.netlify.app/images/mintheinkha_logo.png"/>
                                </div>
                                <h3 className="text-center">လက်ထောက်ဗေဒင်</h3>
                                <p className="my-2 text-center">{question}</p>
                                <div className="d-flex justify-content-center">

                                    <button onClick={() => navigate('/')} className="btn btn-dark rounded-pill ">‌နောက်သို့</button>
                                </div>
                                <div className="grid  grid-cols-9 grid-flow-row w-fit md:gap-3 mx-auto my-6  h-60 ">
                                    <div className="mt-2 col-11 ">
                                        {NUM_LIST.map(({ key, value }) => (
                                            <button
                                                onClick={() => handleClick(key)}
                                                className="border border-gray px-2 m-1 text-center rounded "
                                            >
                                                {value}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <Answer />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Squares;