import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="h-screen w-screen bg-slate-500 p-6">
      <div className="w-[500px] space-y-5">
        {/* botão de voltar: */}
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)} // aqui estamos passando uma função que chama outra função, não daria certo se colocássemos apenas navigate(-1) porque isso faria com que a função rodasse automaticamente assim que o botão renderizasse na tela. Da forma correta, ela só é renderizado quando é chamado.
            className="absolute left-0 top-0 bottom-0 text-slate-100"
          >
            <ChevronLeftIcon />
          </button>

          <h2 className="text-[28px] text-slate-100 font-bold text-center">
            Task Details
          </h2>
        </div>

        <div className="bg-slate-200 p-4 rounded-md">
          <h2 className="text-xl text-slate-600 font-bold">{title}</h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;

/* como poderia ser feito o botão de voltar:

  function onBackClick() { 
     navigate(-1);
  }

// <button onClick={onBackClick}></button> */
