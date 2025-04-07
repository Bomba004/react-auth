// src/utils/axiosErrorHandler.ts
// ملف لمعالجة الأخطاء الناتجة عن (axios) وإرجاع رسالة خطأ مناسبة.
import { isAxiosError } from "axios";

/**
 * دالة لمعالجة الأخطاء الناتجة عن (axios) وإرجاع رسالة خطأ مناسبة.
 *
 * @param error - الخطأ المحتمل، والذي قد يكون خطأ من axios أو خطأ عام.
 * @returns رسالة خطأ مناسبة بناءً على نوع الخطأ.
 */
export const axiosErrorHandler = (error: unknown): string => {
  // التحقق مما إذا كان الخطأ صادرًا من axios
  if (isAxiosError(error)) {
    // إرجاع رسالة الخطأ بناءً على توفر البيانات داخل الاستجابة
    return (
      error.response?.data?.message || // محاولة الحصول على رسالة الخطأ من البيانات المستقبلة
      error.response?.data || // في حالة عدم توفر الرسالة، يتم إرجاع البيانات بالكامل
      error.message // كملاذ أخير، يتم إرجاع رسالة الخطأ العامة من axios
    );
  }

  // إذا لم يكن الخطأ من axios، يتم إرجاع رسالة خطأ عامة
//   return "حدث خطأ غير متوقع";
  return "An unexpected error";
};

export default axiosErrorHandler;
