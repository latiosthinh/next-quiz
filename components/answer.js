import { useAppContext } from '../context/state'
import { toChars } from '../util/helper'

const Answer = ({ order, choice, choiceName, choiceId, isCorrect }) => {
	let context = useAppContext()

	const handleClick = () => {
		context.setChecked( true )
	}

	return (
		<div className="relative mb-5">
			<input className="sr-only peer" type="radio" 
						name={choiceName} id={choiceId}
						onClick={handleClick}
			/>

			{ isCorrect && context.checked &&
				<>
				<label className="flex p-5 bg-slate-700 border-slate-700 cursor-pointer focus:outline-none hover:bg-gray-600 ring-green-500 ring-2 border-transparent"
						htmlFor={choiceId}>
					<span className="absolute top-0 left-0 h-full flex justify-center items-center px-3 bg-gray-900">{toChars( order )}</span>
					<p className="pl-6">{choice.answer}</p>
				</label>
				<div className="absolute w-5 flex top-0 right-0 h-full px-5 justify-center items-center">👍</div>
				</>
			}

			{ isCorrect && !context.checked &&
				<>
				<label className="flex p-5 bg-slate-700 border-slate-700 cursor-pointer focus:outline-none hover:bg-gray-600 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent"
						htmlFor={choiceId}>
					<span className="absolute top-0 left-0 h-full flex justify-center items-center px-3 bg-gray-900">{toChars( order )}</span>
					<p className="pl-6">{choice.answer}</p>
				</label>
				<div className="absolute hidden w-5 peer-checked:flex top-0 right-0 h-full px-5 justify-center items-center">👍</div>
				</>
			}

			{ !isCorrect && 
				<>
				<label className="flex p-5 bg-slate-700 border-slate-700 cursor-pointer focus:outline-none hover:bg-gray-600 peer-checked:ring-red-500 peer-checked:ring-2 peer-checked:border-transparent"
						htmlFor={choiceId}>
					<span className="absolute top-0 left-0 h-full flex justify-center items-center px-3 bg-gray-900">{toChars( order )}</span>
					<p className="pl-6">{choice.answer}</p>
				</label>
				<div className="absolute hidden w-5 peer-checked:flex top-0 right-0 h-full px-5 justify-center items-center">👎</div>
				</>
			}
		</div>
	)
}

export default Answer 