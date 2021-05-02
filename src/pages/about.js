import { useLocalization } from 'gatsby-theme-i18n';
import React from 'react';
import { Card, Flex, Heading, Text } from 'theme-ui';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import { about as title } from '../translations/Nav.transaltion';

const AboutPage = () => {
  const { locale } = useLocalization();
  const text = {
    fr:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."\n' +
      '\n',
    en:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n' +
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\n' +
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n' +
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    ar:
      'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت ...\n' +
      '\n' +
      'وعند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظات او الانتقادات للتصميم الاساسي.\n' +
      '\n' +
      'وخلافاَ للاعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد. من كتاب "حول أقاصي الخير والشر"\n' +
      '\n' +
      ' \n' +
      '\n' +
      ' نموذج لوريم ايبسوم عربي -  فرانكوا اراب \n' +
      ' \n' +
      '\n' +
      '"لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور\n' +
      '\n' +
      'أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد\n' +
      '\n' +
      'أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس\n' +
      '\n' +
      'أيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت\n' +
      '\n' +
      'نيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا\n' +
      '\n' +
      'كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم."\n' +
      '\n' +
      '"سيت يتبيرسبايكياتيس يوندي أومنيس أستي ناتيس أيررور سيت فوليبتاتيم أكيسأنتييوم\n' +
      '\n' +
      'دولاريمكيو لايودانتيوم,توتام ريم أبيرأم,أيكيو أبسا كيواي أب أللو أنفينتوري فيرأتاتيس ايت\n' +
      '\n' +
      'كياسي أرشيتيكتو بيتاي فيتاي ديكاتا سيونت أكسبليكابو. نيمو أنيم أبسام فوليوباتاتيم كيواي\n' +
      '\n' +
      'فوليوبتاس سايت أسبيرناتشر أيوت أودايت أيوت فيوجايت, سيد كيواي كونسيكيونتشر ماجناي\n' +
      '\n' +
      'دولارس أيوس كيواي راتاشن فوليوبتاتيم سيكيواي نيسكايونت. نيكيو بوررو كيوايسكيوم\n' +
      '\n' +
      'ايست,كيواي دولوريم ايبسيوم كيوا دولار سايت أميت, كونسيكتيتيور,أديبايسكاي فيلايت, سيد\n' +
      '\n' +
      'كيواي نون نيومكيوام ايايوس موداي تيمبورا انكايديونت يوت لابوري أيت دولار ماجنام\n' +
      '\n' +
      'ألايكيوام كيوايرات فوليوبتاتيم. يوت اينايم أد مينيما فينيام, كيواس نوستريوم أكسيركايتاشيم\n' +
      '\n' +
      'يلامكوربوريس سيوسكايبيت لابورايوسام, نايساي يوت ألايكيوايد أكس أيا كوموداي\n' +
      '\n' +
      'كونسيكيواتشر؟ كيوايس أيوتيم فيل أيوم أيوري ريبريهينديرايت كيواي ان إيا فوليوبتاتي\n' +
      '\n' +
      'فيلايت ايسسي كيوم نايهايل موليستايا كونسيكيواتيو,فيلايليوم كيواي دولوريم أيوم فيوجايات كيو\n' +
      '\n' +
      'فوليوبتاس نيولا باراياتيور؟"\n' +
      '\n' +
      '" أت فيرو ايوس ايت أكيوساميوس ايت أيوستو أودايو دايجنايسسايموس ديوكايميوس كيواي\n' +
      '\n' +
      'بلاندايتاييس برايسينتايوم فوليوبتاتيوم ديلينايتاي أتكيوي كورريوبتاي كيوأوس دولوريس أيت\n' +
      '\n' +
      'سيما يليكيوسيونت ان كيولبا كيواي أوفايكيا ديسيريونت موللايتايا انايماي, أيدي ايست لابوريوم\n' +
      '\n' +
      'دايستا ينستايو. نام لايبيرو تيمبور, كيوم سوليوتا نوبايس ايست ايلاجينداي أوبتايو كيومكيوي\n' +
      '\n' +
      'نايهايل ايمبيدايت كيو ماينيوس ايدي كيوود ماكسهيمي بلاسايت فاسيري بوسسايميوس,أومنايس\n' +
      '\n' +
      'فوليوبتاس ايت ايوت أسسيو ميندايست, أومنيوس دولار ريبيللينديوس. تيمبورايبيوس أيوتيم\n' +
      '\n' +
      'كيواس موليستاياس أكسكيبتيوراي ساينت أوككايكاتاي كيبايدايتات نون بروفايدنت\n' +
      '\n' +
      'أيت دولوريوم فيوجا.ايت هاريوم كيوايديم ريريوم فاكايلايسايست ايت أكسبيدايتا\n' +
      '\n' +
      'كيوايبيوسدام ايت أوت\n' +
      '\n' +
      'أوففايكايس ديبايتايس أيوت ريريوم نيسيسسايتاتايبيوس سايبي ايفينايت يوت ايت فوليبتاتيس \n' +
      '\n' +
      'ريبيودايايانداي ساينت ايت موليسفاياي نون ريكيوسانداي.اتاكيوي ايريوم ريريوم هايس تينيتور\n' +
      '\n' +
      'أ ساباينتي ديليكتيوس, يوت أيوت رياسايندايس فوليوبتاتايبص مايوريس ألايس\n' +
      '\n' +
      'كونسيكيواتور أيوت بيرفيريندايس دولورايبيوس أسبيرايوريس ريبيللات ."',
  };
  return (
    <main style={{ direction: locale === 'ar' ? 'rtl' : 'ltr' }}>
      <SEO title={title[locale]} lang={locale} />
      <Layout>
        <Flex variant="flex.centerColumn" as="section">
          <Card as="article">
            <Heading as="h1"> {title[locale]}</Heading>
            <Text style={{}}>{text[locale]}</Text>
          </Card>
        </Flex>
      </Layout>
    </main>
  );
};
export default AboutPage;
