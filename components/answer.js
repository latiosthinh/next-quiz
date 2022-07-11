const Answer = ({ choice, choiceName, choiceId, isCorrect }) => {
	return (
		<div className="relative mb-5">
			<input className="sr-only peer" type="radio" name={choiceName} id={choiceId} isCorrect={isCorrect} />
			

			{ isCorrect && 
				<>
				<label className="flex p-5 bg-slate-700 border-slate-700 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-600 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent"
					htmlFor={choiceId}>
					{choice.answer}
				</label>
				<div className="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">👍</div>
				</>
			}
			{ !isCorrect && 
				<>
				<label className="flex p-5 bg-slate-700 border-slate-700 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-600 peer-checked:ring-red-500 peer-checked:ring-2 peer-checked:border-transparent"
					htmlFor={choiceId}>
					{choice.answer}
				</label>
				<div className="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">👎</div>
				</>
			}
		</div>
	)
}

export default Answer 