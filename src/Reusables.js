export const findIndex = (list, id) => list.findIndex(item => item.id === id)
export const getById = (list, id) => Object.assign({}, list.find(item => item.id === id))
export const addItem = (list, item) => [...list, item]
export const removeItem = (list, id) => list.filter(item => item.id !== id)
export const updateList = (list, item) => {
	const index = findIndex(list,item.id)
	return [
		...list.slice(0, index),
		item,
		...list.slice(index+1)
	]
}

