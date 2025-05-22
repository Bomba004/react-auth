/* p:0.1.r2
   p:3[Dashboard__App] - TC[Users]
------------------------------------------------------*/
import { Avatar, SearchFilterBar, TabControl, TabItems, useState, useTranslation } from "@/utils/alias";
import "./Users.scss";

// level 0:
export function Users() {
  return (
    <TabControl__Users />
  );
}

/// Content Components ====================================================

// level 1:
export function TabControl__Users() {
  const { t } = useTranslation();

  const tabs: TabItems = [
    { id: '601', label: t('dashboard__app.users.data'), content: <UsersDataContent type={t('dashboard__app.users.data')} /> },
    { id: '602', label: t('dashboard__app.users.permissions'), content: <UsersPermissionsContent type={t('dashboard__app.users.permissions')} /> },
  ];

  return (
    <TabControl tabs={tabs} className="tab_1 reverse md:flex-col" />
  );
}


// level 2: -> Data
import { IUser } from "@/utils/type"
function UsersDataContent({ type }: { type: string|null }) {

  // Sample users data
  const data: IUser[] = [
    { id: 1, name: "أحمد محمد", email: "ahmed.mohamed@example.com", phone: "01012345678", address: { street: "10 شارع النصر", city: "القاهرة", country: "مصر" }, role: "admin", avatar: "https://randomuser.me/api/portraits/men/1.jpg", jobTitle: "مطور واجهات أمامية" },
    { id: 2, name: "مريم علي", email: "mariam.ali@example.com", phone: "01112345678", address: { street: "25 شارع الحرية", city: "الإسكندرية", country: "مصر" }, role: "user", avatar: "https://randomuser.me/api/portraits/women/1.jpg", jobTitle: "مصممة جرافيك" },
    { id: 3, name: "محمود حسن", email: "mahmoud.hassan@example.com", phone: "01212345678", address: { street: "5 شارع الجلاء", city: "الجيزة", country: "مصر" }, role: "manager", avatar: "https://randomuser.me/api/portraits/men/2.jpg", jobTitle: "مدير مشاريع" },
    { id: 4, name: "فاطمة زكريا", email: "fatma.zakaria@example.com", phone: "01312345678", address: { street: "15 شارع الثورة", city: "بورسعيد", country: "مصر" }, role: "user", avatar: "https://randomuser.me/api/portraits/women/2.jpg", jobTitle: "محاسبة" },
    { id: 5, name: "خالد أمين", email: "khaled.amin@example.com", phone: "01412345678", address: { street: "30 شارع البحر", city: "دمياط", country: "مصر" }, role: "developer", avatar: "https://randomuser.me/api/portraits/men/3.jpg", jobTitle: "مطور برمجيات" },
    { id: 6, name: "نورا سعيد", email: "nora.saeed@example.com", phone: "01512345678", address: { street: "8 شارع الجامعة", city: "المنصورة", country: "مصر" }, role: "user", avatar: "https://randomuser.me/api/portraits/women/3.jpg", jobTitle: "أخصائية تسويق" },
    { id: 7, name: "يوسف رامي", email: "youssef.ramy@example.com", phone: "01612345678", address: { street: "12 شارع النهضة", city: "طنطا", country: "مصر" }, role: "developer", avatar: "https://randomuser.me/api/portraits/men/4.jpg", jobTitle: "مطور خلفية" },
    { id: 8, name: "سارة كمال", email: "sara.kamal@example.com", phone: "01712345678", address: { street: "12 شارع النهضة", city: "طنطا", country: "مصر" }, role: "user", avatar: "https://randomuser.me/api/portraits/women/4.jpg", jobTitle: "أخصائية تسويق" },
    { id: 9, name: "محمد أحمد", email: "mohamed.ahmed@example.com", phone: "01812345678", address: { street: "12 شارع النهضة", city: "طنطا", country: "مصر" }, role: "user", avatar: "https://randomuser.me/api/portraits/men/5.jpg", jobTitle: "مطور برمجيات" },
    { id: 10, name: "سارة محمد", email: "sara.mohamed@example.com", phone: "01912345678", address: { street: "12 شارع النهضة", city: "طنطا", country: "مصر" }, role: "user", avatar: "https://randomuser.me/api/portraits/women/5.jpg", jobTitle: "أخصائية تسويق" },
    { id: 11, name: "إبراهيم سمير", email: "ibrahim.samir@example.com", phone: "01022334455", address: { street: "33 شارع المعز", city: "القاهرة", country: "مصر" }, role: "developer", avatar: "https://randomuser.me/api/portraits/men/11.jpg", jobTitle: "مطور فلتر" },
    { id: 12, name: "دينا هشام", email: "dina.hesham@example.com", phone: "01055667788", address: { street: "14 شارع الرشيد", city: "الإسكندرية", country: "مصر" }, role: "designer", avatar: "https://randomuser.me/api/portraits/women/12.jpg", jobTitle: "مصممة جرافيك" },
    { id: 13, name: "كريم أسامة", email: "karim.osama@example.com", phone: "01088990011", address: { street: "5 شارع الفنان", city: "الجيزة", country: "مصر" }, role: "content", avatar: "https://randomuser.me/api/portraits/men/13.jpg", jobTitle: "كاتب محتوى" },
    { id: 14, name: "ياسمين عمرو", email: "yasmin.amr@example.com", phone: "01077889900", address: { street: "8 شارع النخيل", city: "المنصورة", country: "مصر" }, role: "marketing", avatar: "https://randomuser.me/api/portraits/women/14.jpg", jobTitle: "أخصائية تسويق رقمي" },
    { id: 15, name: "صلاح الدين", email: "salah.eldeen@example.com", phone: "01066554433", address: { street: "19 شارع الجمهورية", city: "أسوان", country: "مصر" }, role: "admin", avatar: "https://randomuser.me/api/portraits/men/15.jpg", jobTitle: "مدير نظام" },
    { id: 16, name: "رنا رامي", email: "rana.ramy@example.com", phone: "01033221100", address: { street: "27 شارع السيدة", city: "طنطا", country: "مصر" }, role: "hr", avatar: "https://randomuser.me/api/portraits/women/16.jpg", jobTitle: "مسؤولة موارد بشرية" },
    { id: 17, name: "طارق نبيل", email: "tarek.nabil@example.com", phone: "01099887766", address: { street: "3 شارع الهرم", city: "الجيزة", country: "مصر" }, role: "finance", avatar: "https://randomuser.me/api/portraits/men/17.jpg", jobTitle: "محلل مالي" },
    { id: 18, name: "شيرين أحمد", email: "shereen.ahmed@example.com", phone: "01044556677", address: { street: "11 شارع البحر", city: "دمياط", country: "مصر" }, role: "support", avatar: "https://randomuser.me/api/portraits/women/17.jpg", jobTitle: "فني دعم فني" },
    { id: 19, name: "حسام الدين", email: "hossam.eldeen@example.com", phone: "01011223344", address: { street: "6 شارع الجامع", city: "الأقصر", country: "مصر" }, role: "architect", avatar: "https://randomuser.me/api/portraits/men/18.jpg", jobTitle: "مهندس معماري" },
    { id: 20, name: "آية وليد", email: "aya.waleed@example.com", phone: "01077665544", address: { street: "23 شارع النزهة", city: "بورسعيد", country: "مصر" }, role: "translator", avatar: "https://randomuser.me/api/portraits/women/18.jpg", jobTitle: "مترجمة" },
    { id: 21, name: "عمرو خالد", email: "amr.khaled@example.com", phone: "01088776655", address: { street: "7 شارع الثورة", city: "المنيا", country: "مصر" }, role: "researcher", avatar: "https://randomuser.me/api/portraits/men/19.jpg", jobTitle: "باحث علمي" }
  ];

  const { t } = useTranslation();

  // تصفية حسب البحث
  const [searchTerm, setSearchTerm] = useState<string>('');
  const filteredData = data.filter((D) =>
    D.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    D.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    D.phone.includes(searchTerm)
  );



  return (
    <>
      
      {(false) && <h2 className=" text-xl font-semibold mb-4">{type} {t('dashboard__app.users.title')}</h2> }

      {/* شريط البحث والتصفية */}
      <SearchFilterBar value={searchTerm} onChange={setSearchTerm} />

      <section className="users__Data_content">
        {/* CardUser */}
        {filteredData.map((user: IUser) => ( <CardUser key={user.id} {...user} /> ))}
      </section>

    </>
  );
}

// level 2: -> Permissions
function UsersPermissionsContent({ type }: { type: string }) {
  return (
    <h3>{type}</h3>
  );
}


// ---------- ---------- ---------- ---------- ---------- ---------- ----------


// level 3: -> CardUser
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { CgRename, MdOutlineAttachEmail, MdOutlineLocalPhone, GiJourney, BiSolidJoystick, } from "@/utils/alias-Image-Icons";
import Ty from "@/components/ui/tippy/Tippy";

export default function CardUser(user: IUser) {
  return (
    <Card className="card CardUser cursor-pointer">
      <CardHeader className="card__header">

        <Avatar src={user.avatar} alt={user.name} style={{ fontSize: '180%' }} />
{/*       
        <p className="text-wrap">
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </p> */}
        
        <Ty content={user.name}>
          <h2>
            <CgRename className="size-[1.25em]" />
            {user.name}
          </h2>
        </Ty>
        
        <Ty content={user.jobTitle}>
          <p>
            <BiSolidJoystick className="size-[1.5em]" />
            {user.jobTitle}
          </p>
        </Ty>
        
      </CardHeader>
      
      <hr />
      
      <CardContent className="p-2">
        
        <Ty content={`${user.address.street} ${user.address.city} ${user.address.country}`}>
          <p>
            <GiJourney className="size-[1.5em]" />
            {user.address.street} {user.address.city} {user.address.country}
          </p>
        </Ty>
        
        <Ty content={user.phone}>
          <p>
            <MdOutlineLocalPhone className="size-[1.5em]" />
            {user.phone}
          </p>
        </Ty>
        
        <Ty content={user.email}>
          <p>
            <MdOutlineAttachEmail className="size-[1.5em]" />
            {user.email}
          </p>
        </Ty>
        
      </CardContent>
    </Card>
  )
}
