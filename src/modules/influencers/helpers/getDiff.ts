export function getDiff<
	T extends Record<string, number | null | string>,
	U extends T,
>(obj1: T, obj2: U) {
	return Object.entries(obj1).reduce((diff, [key, value]) => {
		if (key in obj2) {
			const val = obj2[key]
			if (val !== value) {
				return {
					...diff,
					[key]: val,
				}
			}
		}
		return diff
	}, {})
}
