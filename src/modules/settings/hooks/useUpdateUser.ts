import { UserApi } from '@/api/UserApi'
import { IUser, UpdateUserData } from '@/api/type'
import { Response } from '@/core/axios'
import { QUERY_KEYS } from '@/core/constants'
import { handleError } from '@/modules/auth/core/utils'
import { UseMutationOptions, useMutation, useQueryClient } from 'react-query'
import { toast } from 'react-toastify'

type UseUpdateUserOptions = UseMutationOptions<
	Response<IUser>,
	unknown,
	UpdateUserData,
	unknown
>

export const useUpdateUser = (options: UseUpdateUserOptions = {}) => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: QUERY_KEYS.UPDATE_USER,
		mutationFn: UserApi.updateUser,
		async onSuccess(data) {
			await queryClient.invalidateQueries('user')
			toast.success(data.message)
		},
		onError(error) {
			const message = handleError(error)
			toast.error(message)
		},
		...options,
	})
}
