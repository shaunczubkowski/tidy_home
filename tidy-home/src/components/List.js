function List({items}) {

    if (!items) {
        console.warn('MISSING ITEM PROPS: Pass items as prop to populate list.')
        return
    }

    const populatedList = items.map(item => <li key={item}>{item}</li> )

    console.log(items)
    console.log(populatedList)

    return (
        <div>
            <ul>
                {populatedList}
            </ul>
        </div>
        
    );
}

export default List;