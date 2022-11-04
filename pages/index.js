import Head from 'next/head'
import questions from '../questions.json'
import { useState } from 'react'
import Question from '../components/question'
import Answer from '../components/answer'
import { useAppContext } from '../context/state'

export default function Home() {
	const [id, setId] = useState( 0 )
	let context = useAppContext()

	const handleNext = () => {
		if ( id == questions.length - 1 ) {
			setId( 0 )
			return
		}

		context.setChecked( false )
		setId( id + 1 )
	}

	return (
		<>
			<Head>
				<title>Next Quiz</title>
				<meta name="description" content="Build with Next" />
				<meta name="viewport" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="bg-slate-800 v-screen h-screen text-white flex overflow-hidden">
				{
					questions[id] &&
					<>
					<div className="flex-auto w-2/5 bg-slate-900 h-full overflow-y-auto p-3">
						<Question key={'question' + id} item={questions[id]} />
					</div>
					
					<div className="flex-auto w-3/5 h-screen flex flex-col overflow-y-auto p-3">
					{
						questions[id].answerOptions.map((choice, index) => (
							<Answer 
								key={'answer-' + index + '/' + id}
								order={index}
								choice={choice} 
								choiceName={'answer-' + id} 
								choiceId={'answer-' + index + '/' + id}
								isCorrect={choice.isCorrect ?? false}
								/>
					))}

						<nav className="mt-5">
							<button className="bg-green-400 px-5 py-2.5" onClick={handleNext}>Next</button>
						</nav>

						{
							context.checked && questions[id].explain &&
							<div className="mt-12 p-5 bg-slate-900">
								<h2 className="mb-5 font-bold underline underline-offset-2">Explaination </h2>

								{questions[id].explain}
							</div>
						}
					</div>
					</>
				}
			</main>
		</>
	)
}
