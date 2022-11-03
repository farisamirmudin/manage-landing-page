function Section3() {
    const reviews = [
        {
            id: 1,
            image: "anisha",
            name: "Anisha Li",
            comment: "Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."
        },
        {
            id: 2,
            image: "ali",
            name: "Ali Bravo",
            comment: "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused."
        },{
            id: 3,
            image: "richard",
            name: "Richard Watts",
            comment: "Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!"
        },{
            id: 4,
            image: "shanai",
            name: "Shanai Gough",
            comment: "Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive."
        }
    ]
    return (
        <div className="mt-6 px-20 text-center">
            <h3 className="text-3xl mb-6">What they've said</h3>
            <div className="flex overflow-auto md:space-x-6 space-y-6 md:space-y-0 md:flex-row flex-col">
                {reviews.map(review => (
                    <div className="flex flex-col items-center flex-shrink-0 md:w-2/5" key={review.id}>
                        <img src={`/images/avatar-${review.image}.png`} alt="" className="w-14"/>
                        <div className="bg-veryLightGray p-6 pt-10 -mt-7 -z-10">
                            <h3>{review.name}</h3>
                            <p>{review.comment}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-6">
                <a href="#" className="text-white bg-brightRed p-2 rounded-full px-4 hover:bg-brightRedLight">Get Started</a>
            </div>
        </div>
    )
}
export default Section3