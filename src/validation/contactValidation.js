import * as Yup from 'yup'

export let contactSchema = Yup.object().shape({
  fullname: Yup.string("مسخره بازیات تموم شد اسمشو مثل آدم بنویس")
    .required("انتظار داری من براش اسم انتخاب کنم؟"),
  photo: Yup.string().url("این دیگه چه سمیه نمیتونم بخونمش!")
    .required("یه عکس براش انتخواب کن"),
  mobile: Yup.number("این شماره ساقیته؟")
    .required("مشکل داری؟ ما داریم اینجا زحمت میکشیم"),
  email: Yup.string("").email("ایمیلش درست نیست")
    .required("اینطوری نمیتونم حتما باید ایمیل باشه"),
  job: Yup.string().nullable(),
  group: Yup.string()
})