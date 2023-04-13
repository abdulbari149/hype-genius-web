import { UserApi } from '@/api/UserApi'
import { IUser, UpdateUserData } from '@/api/type'
import { Response } from '@/core/axios'
import { QUERY_KEYS } from '@/core/constants'
import { UseMutationOptions, useMutation } from 'react-query'

type UseUpdateUserOptions = UseMutationOptions<
	Response<IUser>,
	unknown,
	UpdateUserData,
	unknown
>

export const useUpdateUser = (options: UseUpdateUserOptions = {}) => {
	return useMutation({
		mutationKey: QUERY_KEYS.UPDATE_USER,
		mutationFn: UserApi.updateUser,
		...options,
	})
}
