import {QUESTIONS} from "../data.tsx";
import {Link} from "react-router-dom";

const Question = () => {
    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                           <div className="d-flex justify-content-center">
                               <img className="rounded-circle" width="70" height="70" src="https://mintheinkha-lathtaukbaydin.netlify.app/images/mintheinkha_logo.png"/>
                           </div>
                            <h3 className="text-center">လက်ထောက်ဗေဒင်</h3>

                            {QUESTIONS.questions.map((q) => (
                                <Link
                                    to={`squares/${q.questionNo}`}
                                    key={q.questionNo}
                                    state={q.questionName}
                                    className="cursor-pointer text-amber-700 text-start "
                                >
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            <span>{q.questionNo} . {q.questionName} </span>
                                        </li>
                                    </ul>
                                </Link>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Question;