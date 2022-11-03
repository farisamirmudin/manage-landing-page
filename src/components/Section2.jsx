import { data } from "autoprefixer"

function Section2() {
    const datas = [
        {
            id: "01",
            title: "Track company-wide progress",
            desc: " See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
        },
        {
            id: "02",
            title: "Advanced built-in reports",
            desc: "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."
        },
        {
            id: "03",
            title: "Everything you need in one place",
            desc: "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."
        }
    ]
    return (
        <div className="px-20 flex flex-col mt-12 items-start space-y-4 md:space-y-0 md:space-x-10 md:flex-row">
            <div className="md:w-1/2 space-y-6">
                <h3 className="text-2xl">What's different about Manage?</h3>
                <p className="text-sm">Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams. </p>
            </div>
            <div className="flex flex-col space-y-4 md:w-1/2">
                {datas.map(data => (
                    <div className="flex items-start text-sm space-x-2" key={data.id}>
                        <div className="bg-brightRed rounded-full p-1 px-4 text-white">{data.id}</div>
                        <div className="space-y-4">
                            <h3>{data.title}</h3>
                            <p>{data.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Section2