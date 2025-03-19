interface FactInt {
    title: string,
    desc: string
}

const arrayFactInt: FactInt[] = [
    {
        title: '51',
        desc: 'сотрудник'
    },
    {
        title: '2/3',
        desc: 'backend-разработчиков'
    },
    {
        title: '1/3',
        desc: 'flutter-разработчиков'
    },
    {
        title: '60%',
        desc: 'PME-руководителей'
    },
]

function Facts() {
    return (
        <>
            <div className="px-[228rem] py-[113rem] bg-blue flex gap-[164rem]">
                {
                    arrayFactInt.map((el,index)=> {
                        return (
                            <div key={index} className="w-[243rem] h-[321rem] rounded-[16rem] bg-gray px-[24rem] center flex-col">
                                <h2 className="jost text-[64rem] text-primary-text">{el.title}</h2>
                                <p className="jost text-[28rem] text-primary-text text-center">{el.desc}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default Facts;