<template>
  <div class="content" v-if="type == 'policy' && language == 'en-US'">
    <b>Privacy Policy</b>
    <br/>
    <br/>
    The providers (“we”, “us”, “our”) of the service provided by this web site (“Service”) are not responsible for any
    user-generated content (“Content”). Content
    <br/>
    <br/>
    posted express the views of their author only.
    <br/>
    <br/>
    You agree to not use the Service to post or link to any Content which is defamatory, abusive, hateful, threatening,
    spam or spam-like, likely to offend, contains
    objectionable content, contains personal information of others, risks copyright infringement, encourages unlawful
    activity, or otherwise violates any laws.
    <br/>
    <br/>
    We reserve the rights to remove or modify any Content posted for any reason without explanation. Requests for
    Content to be removed or modified will be undertaken
    only at our discretion. We reserve the right to take action against any account with the Service at any time.
    <br/>
    <br/>
    You are granting us with a non-exclusive, permanent, irrevocable, unlimited license to use, publish, or re-publish
    your Content in connection with the Service.
    You retain copyright over the Content.
    <br/>
    <br/>
    All Content you submit or upload may be reviewed by staff members. Do not submit any Content that you consider to be
    private or confidential.
    <br/>
    <br/>
    These terms may be changed at any time without notice.
    <br/>
    <br/>
    If you do not agree with these terms, please do not register or use this Service.
    <br/>
    <br/>
    If you violate local law We are cooperate with international police investigations.
    <br/>
  </div>
  <div class="content" v-if="type == 'policy' && language == 'zh-CN'">
    <b>隐私政策</b>

    <br/>

    <br/>

    本网站提供的服务（“服务”）的提供商（“我们”、“我们”和“我们的”）不对任何用户生成的内容（“内容”）负责。所容纳之物

    <br/>

    <br/>

    帖子只表达了作者的观点。

    <br/>

    <br/>

    您同意不使用本服务发布或链接任何诽谤性、辱骂性、仇恨性、威胁性、垃圾邮件或类似垃圾邮件的内容，可能会冒犯，包含

    令人反感的内容，包含他人的个人信息，有侵犯版权的风险，鼓励非法活动，或以其他方式违反任何法律。

    <br/>

    <br/>

    我们保留以任何理由删除或修改发布的任何内容的权利，恕不解释。将请求删除或修改内容

    只能由我们自行决定。我们保留在任何时候对服务的任何账户采取行动的权利。

    <br/>

    <br/>
    您授予我们使用、发布或重新发布与服务相关的内容的非排他性、永久性、不可撤销、无限制的许可。
    您保留内容的版权。
    <br/>
    <br/>
    您提交或上传的所有内容都可能由工作人员进行审查。不要提交任何您认为是私人或机密的内容。
    <br/>
    <br/>
    这些条款可随时更改，恕不另行通知。
    <br/>
    <br/>
    如果您不同意这些条款，请不要注册或使用此服务。
    <br/>
    <br/>
    如果您违反当地法律，我们将配合国际警方的调查。
    <br/>
  </div>
  <div class="content" v-if="type == 'policy' && language == 'ko-KR'">
    <b>개인 정보 보호 정책</b>

    <br/>

    <br/>

    본 웹 사이트에서 제공하는 서비스 ("서비스") 의 공급자 ("우리", "우리", "우리") 는 사용자가 생성한 콘텐츠 ("콘텐츠") 에 대해 책임을 지지 않습니다.수용물

    <br/>

    <br/>

    게시물은 작가의 관점만 표현했다.

    <br/>

    <br/>

    귀하는 본 서비스를 이용하여 비방, 욕설, 증오, 위협, 스팸 또는 이와 유사한 스팸 메시지를 게시하거나 링크하지 않을 것에 동의합니다.

    타인의 개인 정보를 포함하는 혐오스러운 내용, 저작권 침해 위험, 불법 활동 장려 또는 다른 방식으로 어떤 법률도 위반합니다.

    <br/>

    <br/>

    저희는 어떠한 이유로든 게시된 내용을 삭제하거나 수정할 권리가 있으며 해석하지 않을 수 있습니다.컨텐트 삭제 또는 수정 요청

    우리 스스로 결정할 수밖에 없다.저희는 언제든지 서비스의 모든 계좌에 대해 조치를 취할 권리를 가집니다.

    <br/>

    <br/>

    귀하는 서비스와 관련된 콘텐츠를 사용, 게시 또는 재게시할 수 있는 비배타적, 영구적, 취소 불가능, 무제한의 권한을 부여합니다.

    귀하는 콘텐츠의 저작권을 보유합니다.

    <br/>

    <br/>

    제출하거나 업로드한 모든 내용은 직원이 검토할 수 있습니다.개인 또는 기밀로 간주되는 내용은 제출하지 마십시오.

    <br/>

    <br/>

    이 약관은 예고 없이 변경될 수 있습니다.

    <br/>

    <br/>

    이러한 약관에 동의하지 않을 경우 이 서비스를 등록하거나 사용하지 마십시오.

    <br/>

    <br/>

    만약 당신이 현지 법률을 위반한다면, 우리는 국제 경찰의 조사에 협조할 것입니다.

    <br/>
  </div>

  <div class="content" v-if="type == 'dmca' && language == 'en-US'">
    <b>Requests Delivery</b>
    <br/>
    <br/>
    If you want to remove on my site content,You can to it here.
    <br/>
    <br/>
    We will ignore image-only letters.
    <br/>
    <br/>
    Request Format
    <br/>
    <br/>
    Take down requests must contain:
    <br/>
    <br/>
    Name, phone number and postal address of person, submitting the request.
    <br/>
    <br/>
    If request is made by a company representative — name, phone and address of company.
    <br/>
    <br/>
    Proof of the right to act on behalf of the copyright holder (or proof that you personally are the copyright holder),
    one of the following:
    <br/>
    <br/>
    Link to site where your copyrighted works are hosted / mentioned (not “free” Web hosting);
    <br/>
    <br/>
    USPTO number, or any other reasonable and verifiable ownership proof.
    <br/>
    <br/>
    Exact and complete URL of content requested for removal.
    <br/>
    <br/>
    Example: https://kr36.sogirl.so/example_address
    <br/>
    <br/>
    We will ignore requests to remove search categories or search keywords. There are no copyrights on keywords. Claims
    that mentioning your “registered trademark” is copyright infringement (it is not) will not get you anywhere.
    <br/>
    <br/>
    Requests are processed automatically, if there are no exact links in email, it will be deleted.
    <br/>
    <br/>
    The following statements:
    <br/>
    <br/>
    I have a good faith belief that use of the copyrighted materials described above as allegedly infringing is not
    authorized by the copyright owner, its agent, or the law.
    <br/>
    <br/>
    I swear, under penalty of perjury, that the information in the notification is accurate and that I am the copyright
    owner or am authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.
    Requests without information described above will be ignored.
    <br/>
    <br/>
    Allow up to 2 business days for your request to be processed. Thank you.
    <br/>
    <br/>
    email:fletter@outlook.kr
  </div>
  <div class="content" v-if="type == 'dmca' && language == 'ko-KR'">
    <b> 제공 요청 </b>

    <br/>

    <br/>

    만약 당신이 내 사이트의 내용을 삭제하고 싶다면, 당신은 여기에서 삭제할 수 있습니다.

    <br/>

    <br/>

    이미지만 표시되는 문자는 무시합니다.

    <br/>

    <br/>

    요청 형식

    <br/>

    <br/>

    삭제 요청은 다음을 포함해야 합니다.

    <br/>

    <br/>

    신청서를 제출한 사람의 이름, 전화번호, 우편 주소.

    <br/>

    <br/>

    요청이 회사 담당자에 의해 요청된 경우 - 회사 이름, 전화 번호 및 주소입니다.

    <br/>

    <br/>

    저작권 소유자의 행동을 나타내는 권리 증명 (또는 귀하 개인이 저작권 소유자라는 증명), 다음 중 하나:

    <br/>

    <br/>

    저작권 작품을 호스팅/언급하는 웹 사이트에 링크 ("무료" 웹 호스팅 아님)

    <br/>

    <br/>

    USPTO 번호 또는 기타 합리적이고 검증 가능한 소유권 증명.

    <br/>

    <br/>

    삭제를 요청한 컨텐츠의 정확하고 완전한 URL입니다.

    <br/>

    <br/>

    예:https://kr36.sogirl.so/example_address

    <br/>

    <br/>

    검색 범주 삭제 또는 키워드 검색 요청은 무시됩니다.키워드에는 저작권이 없습니다.당신의"등록 상표"를 언급하는 것은 저작권 침해라고 주장하는 것은 (사실은 그렇지 않다.) 당신을 진전시키지 않을 것이다.

    <br/>

    <br/>

    요청은 자동으로 처리되며 이메일에 정확한 링크가 없으면 삭제됩니다.

    <br/>

    <br/>

    다음 선언:

    <br/>

    <br/>

    나는 상술한 권리침해혐의가 있는 저작권보호를 받는 자료를 사용하는것은 저작권소유자, 그 대리인 또는 법률의 수권을 거치지 않는다고 진심으로 믿는다.

    <br/>

    <br/>

    나는 위증죄의 징벌하에 통지중의 정보는 정확하며 나는 판권소유자 또는 권한을 위임받아 침범당했다고 하는 독점권리의 소유자를 대표하여 행동한다고 선서한다.

    위의 정보가 없는 요청은 무시됩니다.

    <br/>

    <br/>

    최대 2일 (영업일 기준) 동안 요청을 처리할 수 있습니다.정말 감사합니다.

    <br/>

    <br/>

    이메일:fletter@outlook.kr
  </div>
  <div class="content" v-if="type == 'dmca' && language == 'zh-CN'">
    <b>请求交付</b>

    <br/>

    <br/>

    如果你想删除我网站上的内容，你可以在这里删除。

    <br/>

    <br/>

    我们将忽略只显示图像的字母。

    <br/>

    <br/>

    请求格式

    <br/>

    <br/>

    删除请求必须包含：

    <br/>

    <br/>

    提交申请的人员的姓名、电话号码和邮政地址。

    <br/>

    <br/>

    如果请求是由公司代表提出的——公司的名称、电话和地址。

    <br/>

    <br/>

    代表版权持有人行事的权利证明（或您个人是版权持有人的证明），以下之一：

    <br/>

    <br/>

    链接到托管/提及您的版权作品的网站（非“免费”网络托管）；

    <br/>

    <br/>

    USPTO编号，或任何其他合理且可验证的所有权证明。

    <br/>

    <br/>

    请求删除的内容的准确完整URL。

    <br/>

    <br/>

    示例：https://kr36.sogirl.so/example_address

    <br/>

    <br/>

    我们将忽略删除搜索类别或搜索关键字的请求。关键词没有版权。声称提及你的“注册商标”是侵犯版权（事实并非如此）不会让你有任何进展。

    <br/>

    <br/>

    请求会自动处理，如果电子邮件中没有确切的链接，它将被删除。

    <br/>

    <br/>

    以下声明：

    <br/>

    <br/>

    我真诚地相信，使用上述涉嫌侵权的受版权保护的材料未经版权所有者、其代理人或法律授权。

    <br/>

    <br/>

    我宣誓，在伪证罪的惩罚下，通知中的信息是准确的，我是版权所有者或被授权代表据称被侵犯的独家权利的所有者行事。

    没有上述信息的请求将被忽略。

    <br/>

    <br/>

    最多允许2个工作日处理您的请求。非常感谢。

    <br/>

    <br/>

    电子邮件：fletter@outlook.kr
  </div>

  <div class="content" v-if="type == 'consulting' && language == 'ko-KR'">
    <b>광고문의</b>
    <br/>
    <br/>
    광고진행은 대기순번대로 진행 됨을 알려 드립니다.
    <br/>
    <br/>
    PC&모바일 배너사이즈 300*100
    <br/>
    <br/>
    애드탑 일 방문자새션 42만, 페이지뷰 550만뷰 입니다.
    similarweb 한국전체사이트 랭킹 73위 입니다. [사이트순위보러가기]
    <br/>
    <br/>
    한달 전체방문자수 :1060만명
    <br/>
    <br/>
    스카이프: adtophelp
    <br/>
    <br/>
    스카이프 메신저 하나만 운영하며, 다른 채널은없습니다. 아이디가 adtophelp 입니다.
    <br/>
    <br/>
    사기업체 아이디 주의해주세요. live:cid.a7로 시작되는 아이디 주의(사기업체)
    <br/>
    <br/>
    <div class="content-extra">
      <b>*주의</b>
      <br/>
      <br/>
      다른 유사 아이디로 선금을 요구하는 사기업체들이 증가하고있습니다.
      <br/>
      <br/>
      저희업체는 등록&예약시 선금을 요구하지 않습니다.
      <br/>
      <br/>
      모든배너는 사이트에 등록후 광고주님께서 확인후 다음 절차로 진행됩니다.
      <br/>
      <br/>
      이점 꼭 주의해 주시면 피해를 막을수있습니다.
    </div>
  </div>
  <div class="content" v-if="type == 'consulting' && language == 'en-US'">
    <b>Consulting Advertising</b>

    <br/>

    <br/>

    Advertising is carried out in waiting order.

    <br/>

    <br/>

    PC&Mobile Banner Size 300 * 100

    <br/>

    <br/>

    Adtop has 420000 daily views and 5.5 million page views.

    Similarweb ranks 73rd on Korean websites. [View Site Ranking]

    <br/>

    <br/>

    Monthly Visits: 10.6 million

    <br/>

    <br/>

    Skype: adtophelp

    <br/>

    <br/>

    Only operate one Skype chat tool, no other channels. The ID is adtophell.

    <br/>

    <br/>

    Please pay attention to the ID of the private enterprise. Attention to identity starting with live: cid. a7
    (fraudulent enterprises)

    <br/>

    <br/>

    <div class="content-extra">

      <b>*Attention</b>

      <br/>

      <br/>

      The number of fraudulent companies requesting prepayment with other similar IDs is increasing.

      <br/>

      <br/>

      Our company does not require advance payment when registering and booking.

      <br/>

      <br/>

      After all banner advertisements are registered on the website and confirmed by the advertiser, the following steps
      will be followed:

      <br/>

      <br/>

      Be sure to pay attention to this point to avoid losses.
    </div>
  </div>
  <div class="content" v-if="type == 'consulting' && language == 'zh-CN'">
    <b>咨询广告</b>

    <br/>

    <br/>

    广告进行按等待顺序进行。

    <br/>

    <br/>

    PC&移动横幅尺寸300*100

    <br/>

    <br/>

    Adtop日访问量为42万次，页面视图为550万次。

    similarweb在韩国网站排名第73位。[查看站点排名]

    <br/>

    <br/>

    每月访问量：1060万人次

    <br/>

    <br/>

    Skype：adtophelp

    <br/>

    <br/>

    只运营一个Skype聊天工具，没有其他渠道。ID是adtophell。

    <br/>

    <br/>

    请注意私营企业的ID。live:cid.a7开头的身份注意（诈骗企业）

    <br/>

    <br/>

    <div class="content-extra">

      <b>*注意</b>

      <br/>

      <br/>

      以其他类似ID要求预付款的诈骗企业正在增加。

      <br/>

      <br/>

      我们的企业在注册和预订时不要求预付款。

      <br/>

      <br/>

      所有横幅广告在网站上注册后，在广告商确认后将按以下步骤进行：

      <br/>

      <br/>

      一定要注意这一点，就可以避免损失。
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    name: "index",
    components: {},
    data() {
      return {
        type: 'policy'
      }
    },
    computed: {
      ...mapState({
        language: state => state.common.language,
      }),
    },
    watch: {
      '$route': {
        handler() {
          this.type = this.$route.query.type
        },
        immediate: true
      },
    },
    methods: {},
    mounted() {
    },
  }
</script>
<style scoped lang="scss">
  .content {
    font-size: 20px;
    color: rgba(255, 255, 255, 0.8);
    padding: 30px 20px;
    line-height: 28px;

    b {
      color: #fff;
      font-size: 24px;
    }

    .content-extra {
      padding: 15px 0px;
      background: #faf9e9;
      color: #000;
      text-align: center;

      b {
        color: #000;
      }
    }
  }
</style>
<style scoped lang="scss">
  @media screen and (max-width: 750px) {
    .content {
      font-size: 14px;

      b {
        font-size: 16px;
      }
    }
  }

</style>

