function Navbar() {
    return (
        <div className="relative p-20">
            <div className="flex items-center justify-between">
                <img src="/images/logo.svg" alt="manage" className="pt-2"/>
                <div className="hidden md:flex space-x-6">
                    {["Pricing", "Products", "About Us", "Career", "Community"].map(item => <a href="#" key={item}>{item}</a>)}
                </div>
                <a href="#" className="hidden md:block text-white bg-brightRed p-2 rounded-full px-4 hover:bg-brightRedLight">Get Started</a>
            </div>
        </div>
    )
}
export default Navbar