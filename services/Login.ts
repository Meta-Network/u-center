import client from "./client";
import { axiosResult } from '../typings/request.d'

/**
 * 验证邮箱是否存在
 * @param data
 * @returns
 */
export const verifyEmail = (data: any): Promise<axiosResult<string>> => client.post('/api/verify', data)
