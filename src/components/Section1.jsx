function Section1() {
    return (
        <div className="px-20 flex md:flex-row flex-col-reverse items-center md:mt-8">
            <div className="md:w-1/2 space-y-8">
                <h3 className="text-4xl">Bring everyone together to build better products.</h3>
                <p className="text-sm">Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
                <div className="mt-4">
                    <a href="#" className="text-white bg-brightRed p-2 px-4 rounded-full hover:bg-brightRedLight">Get Started</a>
                </div>
            </div>
            <img src='/images/illustration-intro.svg' alt="illustration-intro" className="md:w-1/2"/>
        </div>
    )
}
export default Section1