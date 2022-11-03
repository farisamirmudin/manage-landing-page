export default function Footer() {
    return (
        <div className="flex flex-col px-20 py-8 bg-veryDarkBlue md:justify-between md:flex-row">
            <div className="justify-between flex flex-col md:space-y-0 space-y-4">
                <img src="/images/logo.svg" alt="" className="h-4"/>
                <div className="flex justify-between">
                    {["facebook", "youtube", "twitter", "pinterest", "instagram"].map(item => (
                        <img src={`/images/icon-${item}.svg`} key={item} alt="" className="w-4" />
                    ))}
                </div>
            </div>
            <div className="text-white text-xs space-y-2 text-center md:text-left md:mt-0 mt-4">
                {["Home", "Pricing", "Products", "About Us"].map(item => (
                    <a href="#" className="block" key={item}>{item}</a>
                ))}
            </div>
            <div className="text-white text-xs space-y-2 text-center md:text-left md:m-0 m-2">
                {["Careers", "Community", "Privacy Policy"].map(item => (
                    <a href="#" className="block" key={item}>{item}</a>
                ))}
            </div>
            <div className="flex flex-col items-center md:items-end md:justify-between">
                <div>
                    <input type="text" className="rounded-full p-1 m-2 indent-2" placeholder="Search"/>
                    <button className="rounded-full bg-brightRed p-1 px-3 hover:bg-brightRedLight">Go</button>
                </div>
                <p className="text-xs">Copyright 2020. All Rights Reserved</p>
            </div>
        </div>
    )
}