import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, MapPin, Phone, Clock, Truck } from "lucide-react"

const IMAGES = {
  hero: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/main-ZMw2OrmUMAKn6eDJEkvAY4q1dTHevE.jpg",
  product2: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%A5%BD%E5%A4%A9%E4%BB%96TOP%EF%BC%882%E9%A3%9F%EF%BC%89-01-ZjQcsrPAXWGsyxjvI6qMbsRFZTUSje.jpg",
  product6: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%A5%BD%E5%A4%A9%E4%BB%96TOP%EF%BC%886%E9%A3%9F%EF%BC%89-01-wZf63xHN9gUtc9r2zel35qtHjSs1TO.jpg",
  product5soup: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%A5%BD%E5%A4%A9%E4%BB%96TOP%EF%BC%885%E9%A3%9F%EF%BC%89-01-K2XRvxBEzKeqvqMlL38fyxE4K7Tl6o.jpg",
  noodle: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AmazonTO6%E9%A3%9F-01-xVl22eaAiECDuJJSQji88c6HvXrnEN.jpg",
  noodlePlate: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E9%BA%BA-01-U3ykAd6OKgiZEwwwdOSH89J4qbA1Mj.jpg",
  porkDiagram: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_4cyu7t4cyu7t4cyu.jfif-OUzURo56iSBmcmbyhsh6y84hZ5E5Qy.jpg",
  seaburaSpoon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E8%83%8C%E8%84%82%EF%BC%88%E3%83%AC%E3%83%B3%E3%82%B2%EF%BC%89-01-jdJYCQu4Bu8zbUjKeOdFLaacfnzs0T.jpg",
  kitakataStreet: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sato_shouhiko__--ar_43_--v_7_04940719-f4ea-4333-b2eb-b2bab129da16_1-r0QcLg3yOLp2tLin6bJTrNp86fhebU.png",
  womanEating: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hf_20260317_045924_38b74bca-86cb-42bd-b7f0-a560849b39eb.jpg_202603221540-J3fjfmPPWdedBBR6gjExQhvfsBBrYR.jpg",
  freeShipping: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E9%80%81%E6%96%99%E7%84%A1%E6%96%99-YmmfGymRibUTO3bvydZ4J1uKBXyqF2.jpg",
  sameDay: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%8D%B3%E6%97%A5%E7%99%BA%E9%80%81-Ahw5ojPdoz8VhVKkHTX9ew2mUrdoui.jpg",
  logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rogo-RCNaEmqhnLeDYkNQFZLitsLQgD7T3I.jpg",
  customerMale: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/customerdansei-4hgS2WvrF3Kh5GDtZItRkM7gIVVVRW.jpg",
  storePhoto: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brandkan-LFjeqMIKsJnGe8Cg9yrJW487OonzZ4.jpg",
  buyYahoo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/buyyahoo-nPZGIyhp4wtnyMsJ67CI5uv556hVG1.png",
  buyRakuten: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/buyrakutenn-SzdCalPLJnu3eD6J1ZkBm0ltYsjXKF.png",
  buyAmazon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/buyAmazon-quY3iVaDN57dIDoawayOZhJKsEHtjk.png",
}

const reviews = [
  {
    name: "お客様1",
    rating: 5,
    title: "程よくこってり",
    content: "こってりな味好きだけど、この背脂醤油がちょうど良い好みの味だとわかりました。",
  },
  {
    name: "お客様2",
    rating: 5,
    title: "こってりです",
    content: "期待どおりのこってりでスープまで飲み干しました、これで中細麺があればもっと嬉しい。",
  },
  {
    name: "お客様3",
    rating: 4,
    title: "醤油背脂ラーメン",
    content: "満足できました。美味しくいただきました。",
  },
  {
    name: "お客様4",
    rating: 5,
    title: "喜多方ラーメンの新しい魅力！",
    content: "あっさりした喜多方ラーメンのイメージが良い意味で裏切られました！キレのある醤油に、背脂の甘みとコクが絶妙にマッチしていて、こってり好きにはたまらない一杯です。",
  },
  {
    name: "お客様5",
    rating: 4,
    title: "こってりなのに胃もたれしない",
    content: "脂のしつこさがなく、旨味がしっかりと感じられてとても美味しいです。素材本来の味が活きているからか、こってりしているのに最後まで美味しくいただけました。",
  },
  {
    name: "お客様6",
    rating: 5,
    title: "本格的な味",
    content: "背脂のボリュームと醤油の香ばしさがガツンと来ます！スープのクオリティが非常に高いと感じました。中太ちぢれ麺との相性も抜群で、自宅でおいしいこってりラーメンを食べたい時に大満足できる商品です。リピート確定です！",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-center">
          <Image
            src={IMAGES.logo}
            alt="会津ブランド館"
            width={60}
            height={60}
            className="rounded"
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full">
        <Image
          src={IMAGES.hero}
          alt="背脂醤油ラーメン"
          width={1920}
          height={1080}
          className="w-full h-auto"
          priority
        />
      </section>

      {/* Main Headline */}
      <section className="py-16 px-4 bg-[#3d3529] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-8 text-balance">
            「あっさり」だけじゃない。<br />喜多方ラーメン界のニューウェーブ！
          </h1>
          <p className="text-2xl md:text-4xl font-bold mb-16 text-amber-300 leading-snug">
            創業100年の醤油×国産極上背脂が織りなす、<br />至高の『こってり背脂醤油』。
          </p>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
            喜多方のあの味と国産豚の背脂の旨味を、一つの鍋で完全再現。<br />
            エキスに頼らない、大容量"本格的"スープと生麺のセット。
          </p>
        </div>
      </section>

      {/* Story Section - Kitakata Town */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Image
              src={IMAGES.kitakataStreet}
              alt="喜多方の街並み"
              width={600}
              height={450}
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="space-y-4 text-foreground leading-relaxed">
              <p>
                喜多方は、福島の山あいにある小さな町。<br />
                早朝から湯気を立てる"朝ラー"文化とともに、<br />
                ラーメンはこの町の日常に溶け込んできました。
              </p>
              <p>
                透明感のある醤油スープに、地元の製麺所が仕立てた中太の多加水ちぢれ麺。
              </p>
              <p>
                {"昔ながらの、けれど手を抜かない一杯が、静かに受け継がれています。"}
              </p>
              <p className="font-medium">
                {"喜多方ラーメンは、主張しすぎません。"}
                <br />
{"でも、食べた人の記憶には、きっと長く残ります。"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pork Back Fat Section */}
      <section className="py-16 px-4 bg-[#d4eef7]">
        <div className="max-w-4xl mx-auto">
          <Image
            src={IMAGES.porkDiagram}
            alt="豚の部位図鑑 - 背脂"
            width={800}
            height={400}
            className="w-full h-auto rounded-lg shadow-lg mb-8"
          />
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-[#1a365d] mb-4">豚背脂とは？</h3>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  豚の背中の脂肪部分（皮の下）を指します。
                </p>
                <p>
                  ラード（精製脂）と違って、あらごしの脂身（塊や粒が残った状態）をそのまま使用するのが特徴です。
                </p>
                <p>
                  スープに溶け出すことで、深いコクとまろやかな口当たり、そして豊かな風味を生み出します。
                </p>
              </div>
            </div>
            <Image
              src={IMAGES.seaburaSpoon}
              alt="背脂（レンゲ）"
              width={400}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Noodle Section */}
      <section className="py-16 bg-[#3d3529] px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-amber-300 mb-4">
            喜多方の麺は、<br />なぜ人を惹きつけるのか。
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mt-8">
            <Image
              src={IMAGES.noodlePlate}
              alt="喜多方の多加水中太ちぢれ麺"
              width={600}
              height={450}
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="space-y-4 text-white leading-relaxed">
              <p>
{"喜多方市は、札幌・博多と並び「日本三大ラーメン」と称される地。"}
                {"その評価を支えてきたのが、地元で長く愛される"}
                <span className="font-bold text-amber-300">{'"多加水中太ちぢれ麺"'}</span>
                {"です。"}
              </p>
              <p>
                私たちが採用するのは、喜多方の老舗「五十嵐製麺」が手がけた特注麺。
                加水率約38％のこの麺は、もちもちとした弾力と、つるりとした喉ごしが特徴です。
              </p>
              <p className="font-medium text-amber-200">
                縮れがスープをしっかりとまとい、一口ごとに旨みがひろがる──<br />
                喜多方ラーメンが長年愛されてきた理由が、この一本の麺に詰まっています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Umami Section */}
      <section className="py-16 bg-[#3d3529] px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-amber-300 mb-6">
                圧倒的な「旨味」と<br />「コク」のプラス
              </h2>
              <div className="space-y-4 text-white leading-relaxed">
                <p>
                  喜多方ラーメンのスープに、<br />
                  国産豚の良質な背脂をたっぷりと合わせました。
                </p>
                <p>
                  豚の甘みと旨味がガツンと押し寄せる、<br />
                  お店レベルのパンチ力を実現しました。
                </p>
                <p>
                  また、ラーメンに加えると、表面に均一な脂の膜が張るためスープが冷めにくくなり、<br />
                  最後まで熱々の状態で美味しく食べられます。
                </p>
              </div>
            </div>
            <Image
              src={IMAGES.womanEating}
              alt="ラーメンを食べる女性"
              width={400}
              height={400}
              className="w-full max-w-sm mx-auto h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 px-4 bg-amber-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-red-600 font-bold text-2xl">{'<'}{"お客様の声"}{'>'}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-white border-amber-200">
                <CardContent className="p-8">
                  <div className="flex gap-6">
                    <Image
                      src={IMAGES.customerMale}
                      alt={review.name}
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <p className="font-medium text-foreground">{review.name}</p>
                        <div className="flex gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${
                                i < review.rating
                                  ? "text-yellow-500 fill-yellow-500"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <h3 className="font-bold text-red-800 mb-3 text-lg">{review.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {review.content}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Notice Section */}
      <section className="py-16 px-4 bg-amber-50">
        <div className="max-w-2xl mx-auto">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_dcs1s2dcs1s2dcs1.jfif-N8Npvw9Nz5oMT7mSzRIPutBOdqaC1T.jpg"
            alt="ご購入前の注意点"
            width={800}
            height={800}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Product Lineup */}
      <section className="py-16 bg-muted px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-center text-foreground mb-12">
            商品ラインナップ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card border-border overflow-hidden">
              <Image
                src={IMAGES.product2}
                alt="背脂醤油ラーメン 2食セット"
                width={400}
                height={400}
                className="w-full h-auto"
              />
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2">
                  背脂醤油ラーメン<br />2食セット
                </h3>
                <p className="text-sm text-muted-foreground mb-2">麺×2食 背脂醤油スープ×2食</p>
                <p className="text-sm text-muted-foreground mb-4">まずはお試しにどうぞ</p>
                <p className="text-2xl font-bold text-primary">
                  1,200円<span className="text-sm font-normal">（税・送料込）</span>
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border overflow-hidden">
              <Image
                src={IMAGES.product6}
                alt="背脂醤油ラーメン 6食セット"
                width={400}
                height={400}
                className="w-full h-auto"
              />
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2">
                  背脂醤油ラーメン<br />6食セット
                </h3>
                <p className="text-sm text-muted-foreground mb-2">麺×6食 背脂醤油スープ×6食</p>
                <p className="text-sm text-muted-foreground mb-4">お得な6食！リピーターに人気</p>
                <p className="text-2xl font-bold text-primary">
                  3,200円<span className="text-sm font-normal">（税・送料込）</span>
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border overflow-hidden">
              <Image
                src={IMAGES.product5soup}
                alt="背脂醤油スープのみ 5食セット"
                width={400}
                height={400}
                className="w-full h-auto"
              />
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2">
                  背脂醤油スープのみ<br />5食セット
                </h3>
                <p className="text-sm text-muted-foreground mb-2">140g大容量スープ×5食</p>
                <p className="text-sm text-muted-foreground mb-4">お好みの麺と合わせて</p>
                <p className="text-2xl font-bold text-primary">
                  1,500円<span className="text-sm font-normal">（税・送料込）</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Shipping Banners */}
      <section className="py-8 px-4">
        <div className="max-w-2xl mx-auto grid grid-cols-2 gap-4">
          <Image
            src={IMAGES.freeShipping}
            alt="送料無料（沖縄・離島地域除く）"
            width={400}
            height={150}
            className="w-full h-auto rounded-lg shadow-md"
          />
          <Image
            src={IMAGES.sameDay}
            alt="14時までのご注文で即日発送"
            width={400}
            height={150}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Purchase Links */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-center text-foreground mb-12">
            {"ご購入はこちらから"}
          </h2>
          <div className="grid grid-cols-3 gap-8">
            <a
              href="https://store.shopping.yahoo.co.jp/aizubrandhall/e42bcbcfae2.html"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:opacity-90 transition-opacity text-center"
            >
              <Image
                src={IMAGES.buyYahoo}
                alt="Yahoo!ショッピングで購入"
                width={240}
                height={240}
                className="w-full max-w-[200px] mx-auto rounded-lg shadow-md mb-4"
              />
              <h4 className="font-bold text-foreground text-sm mb-1">{"Yahoo!ショッピング"}</h4>
              <p className="text-xs text-muted-foreground">{"PayPayポイントが貯まる使えるショッピングモールはこちら"}</p>
              <p className="text-xs text-red-600 font-bold mt-1">{"初めて当店をご利用のお客様に300円クーポン進呈中！"}</p>
            </a>
            <a
              href="https://item.rakuten.co.jp/aizubrandhall/c/0000000050/"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:opacity-90 transition-opacity text-center"
            >
              <Image
                src={IMAGES.buyRakuten}
                alt="楽天市場で購入"
                width={240}
                height={240}
                className="w-full max-w-[200px] mx-auto rounded-lg shadow-md mb-4"
              />
              <h4 className="font-bold text-foreground text-sm mb-1">{"楽天市場"}</h4>
              <p className="text-xs text-muted-foreground">{"楽天ポイントが使える国内最大級のショッピングモールはこちら"}</p>
              <p className="text-xs text-red-600 font-bold mt-1">{"初めて当店をご利用のお客様に300円クーポン進呈中！"}</p>
            </a>
            <a
              href="https://www.amazon.co.jp/stores/page/711F00E2-9ED4-47B4-821C-F27E61000D71"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:opacity-90 transition-opacity text-center"
            >
              <Image
                src={IMAGES.buyAmazon}
                alt="Amazonで購入"
                width={240}
                height={240}
                className="w-full max-w-[200px] mx-auto rounded-lg shadow-md mb-4"
              />
              <h4 className="font-bold text-foreground text-sm mb-1">{"Amazon"}</h4>
              <p className="text-xs text-muted-foreground">{"世界最大のショッピングモールでのお買い物はこちら"}</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <p className="mb-4">この商品は「会津ブランド館」が製造・販売・発送を行っています。</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <Image
                src={IMAGES.storePhoto}
                alt="会津ブランド館 店舗外観"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-3 text-sm">
              <h3 className="font-bold text-lg mb-4">店舗案内</h3>
              <p className="font-bold">会津ブランド館</p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                〒965-0044 福島県会津若松市七日町6-15
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                TEL: 0242-25-4141
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                営業時間: 11時〜16時
              </p>
              <p className="flex items-center gap-2">
                <Truck className="w-4 h-4" />
                {"定休日: 12月31日・1月1日（発送もお休みさせて頂きます）"}
              </p>
            </div>
          </div>
          <div className="mt-8">
            <a
              href="https://maps.app.goo.gl/wqyzUQVLcRJrzsgx8"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.30388931034!2d139.9208079!3d37.5007502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff5535cf0cdc5a7%3A0xc1e02afb913c2084!2z5Lya5rSl44OW44Op44Oz44OJ6aSoIEFpenUgQnJhbmQgSGFsbA!5e0!3m2!1sja!2sjp!4v1774160649977!5m2!1sja!2sjp"
                width="100%"
                height="300"
                style={{ border: 0, pointerEvents: 'none' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                title="会津ブランド館 地図"
              />
              <p className="text-center mt-2 text-background/70 hover:text-background text-sm underline">
                Google Mapsで大きな地図を見る
              </p>
            </a>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-background/20 text-sm opacity-70">
            <p>&copy; 2025 AIZU BRAND HALL. All rights reserved</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
