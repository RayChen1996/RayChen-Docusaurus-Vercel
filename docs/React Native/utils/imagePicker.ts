import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import type {
  Asset,
  CameraOptions,
  ImageLibraryOptions,
  ErrorCode,
  ImagePickerResponse,
} from 'react-native-image-picker';

type ResultType = {
  /** - 選擇圖片成功 */
  success: boolean;
  /** - 訊息 */
  message: string;
  /** - 圖片物件 */
  assets: Array<Asset>;
  /** - 錯誤代號 */
  errorCode: ErrorCode;
};

type PickerOptions = CameraOptions | ImageLibraryOptions;

/** - 圖片選擇 */
export default async function imagePicker(
  pickerType: 'CAMERA' | 'IMAGE_LIBRARY' = 'IMAGE_LIBRARY',
  options?: Partial<PickerOptions>,
): Promise<ResultType> {
  const defaultOptions: PickerOptions = {mediaType: 'photo', ...options};
  let result;
  switch (pickerType) {
    // 預設選本地圖片
    case 'IMAGE_LIBRARY':
    default:
      result = await launchImageLibrary(defaultOptions);
      break;
    case 'CAMERA':
      result = await launchCamera(defaultOptions);
      break;
  }
  return processResult(result);
}

/** - 處理圖片回傳結果 */
function processResult(result: ImagePickerResponse) {
  const params: ResultType = {
    success: false,
    message: '選擇被取消',
    errorCode: 'others',
    assets: [],
  };

  if (!result.didCancel) {
    if (result.errorCode) {
      params.errorCode = result.errorCode;
      params.message =
        errorMessages[result.errorCode] || result.errorMessage || '';
    } else if (result.assets) {
      params.success = true;
      params.assets = result.assets;
    }
  }

  return params;
}

/** - 錯誤訊息表 */
const errorMessages: {[key in ErrorCode]: string} = {
  permission: '沒有取得權限',
  camera_unavailable: '無法使用相機',
  others: '其他',
};
