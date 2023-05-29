export default function Header() {
    return (
        <div className="headerClass flex flex-row justify-around items-center px-10">
            <img src="https://static.vecteezy.com/system/resources/previews/019/154/235/original/three-dimensional-complex-shape-abstract-3d-rendering-particle-poster-or-logo-design-template-geometric-shapes-illustration-eps-10-vector.jpg" alt="Logo" className="bg-transparent rounded-2xl w-[2rem] h-[2rem]" />
            <div className="flex flex-row justify-between w-[20rem]">
                <a href="/home">HOME</a>
                <a href="/difference">DIFFERENCE</a>
                <a href="/demo">
                    DEMO
                </a>
            </div>
        </div>
    )
};