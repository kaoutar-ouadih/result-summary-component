

const Summary = () => {
    const data = [{"category": "Reaction","score": 80,"icon": "/assets/icon-reaction.svg", "color": "text-lightRed", "bg-color": "hsla(0, 100%, 67%, 0.08)"}, {"category": "Memory",  "score": 92,  "icon": "/assets/icon-memory.svg", "color": "text-orangeyYellow", "bg-color": "hsla(39, 100%, 56%, 0.08)"},{  "category": "Verbal",  "score": 61,  "icon": "/assets/icon-verbal.svg", "color": "text-greenTeal", "bg-color": "hsla(166, 100%, 37%, 0.08)"},{  "category": "Visual",  "score": 72,  "icon": "/assets/icon-visual.svg", "color": "text-cobaltBlue", "bg-color": "hsla(234, 85%, 45%, 0.08)"}]



  return (
    <div className="flex flex-col sm:flex-row w-[600px] shadow-lg rounded-[20px]">
        <div className="relative -top-1 sm:top-0 flex-1 bg-gradient-to-b from-violetBlue to-cobaltBlue py-6 px-12 rounded-[20px] text-white flex flex-col items-center">
            <span className="text-lightLavender text-xl">Your Result</span>
            <div className="w-36 h-36 bg-gradient-to-b from-violetBlue to-lightRoyalBlue rounded-full flex flex-col items-center justify-center my-6">
                <span className="text-5xl font-bold">76</span>
                <span className="text-sm font-semibold text-gray-400">of 100</span>
            </div>
            <span className="text-2xl font-bold mb-3">Great</span>
            <p className="text-center text-lightLavender">You scored higher than 65% of the people who have taken these tests.</p>
        </div>
        <div className="flex-1 py-6 px-8">
            <span className="font-semibold text-darkGrayBlue text-xl mb-10">Summary</span>
            {
                data.map((result)=>
                    <div key={result.category} style={{backgroundColor: result["bg-color"]}} className="my-5 flex gap-2 items-center font-semibold bg-lightRedBg py-2 px-3 rounded-md text-sm">
                        <img src={result.icon} alt={result.category+' icon'} />
                        <span className={'grow ' + result.color}>{result.category}</span>
                        <span className="text-darkGrayBlue">{result.score} <span className="text-gray-400">/ 100</span></span>
                    </div>
                )
            }
            <button type="button" className="bg-darkGrayBlue text-white rounded-full w-full py-2 mt-2 hover:bg-gradient-to-b from-violetBlue to-cobaltBlue">Continue</button>
        </div>

    </div>
  )
}

export default Summary
