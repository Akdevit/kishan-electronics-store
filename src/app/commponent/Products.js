import React from "react";
import Image from "next/image";
import whatsapp from "../Images/whatsapp.png";
const Products = () => {
  const ProductsDetas = [
    {
      Image:
        "https://static1.industrybuying.com/products/electrical/cables-and-wire/flame-retardant-fr-house-wires/ELE.FLA.620276622_1690782999525.webp",
      Name: "1.5mm wire diamond",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://www.orientelectric.com/images/gallery/Wire_Mono_Packaging_Diamond_1mm_SQ_Y.png",
      Name: "1mm wire diamond",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://www.orientelectric.com/images/gallery/Wire_Mono_Packaging_Diamond_075mm_SQ_G.png",
      Name: "0.75 mm wire diamond",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://static1.industrybuying.com/products/led-lights/light-bulbs/led-bulbs/LED.LED.36187637_1668248109547.webp",
      Name: "Champion 9w Led bulb",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://static1.industrybuying.com/products/led-lights/light-bulbs/led-bulbs/LED.HAN.105669438_1668198385159.webp",
      Name: "100w bulb super",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://static1.industrybuying.com/products/electrical/electrical-appliances/ceiling-fans/ELE.CEI.17686970_1667963620739.webp",
      Name: "Usha swift 1200M fan",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/SELLER/Default/2023/1/AS/YR/BQ/10429723/900mm-usha-swift-ceiling-fan-500x500.png",
      Name: "Usha swift 900M fan",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://static1.industrybuying.com/products/electrical/air-coolers-and-fans/ceiling-fans/ELE.CEI.421616363_1695034180569.webp",
      Name: "Usha swift 1200M fan",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://shiningbulb.com/wp-content/webp-express/webp-images/uploads/Crompton-energion-bldc-ceiling-fan-shiningbulb-1-768x768.jpg.webp",
      Name: " Crompton 1200M fan",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/SELLER/Default/2023/5/310929190/BT/NJ/WS/117152411/crompton-high-speed-ceiling-fan-with-wider-blades-500x500.jpg",
      Name: "Crompton 900M fan",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://www.khoslaonline.com/wp-content/uploads/2023/03/51KQp7ArUPL._SL1500_.jpg",
      Name: "Ultra fan 1200M ",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://www.suryaelectronics.in/CommonImageHandler/ImageHandler.ashx?imagepath=~/img/Product/Main/ORIENTHomeappliancesCeilingFan51.jpg&width=1080",
      Name: "Ultra fan 900M",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/GK/VQ/TM/SELLER-76028174/toofan-pedestal-fan-500x500.jpg",
      Name: "Toofan stand fan",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/SELLER/Default/2021/9/RS/VF/XI/112476337/prakash-plastic-bulb-holder-1000x1000.jpg",
      Name: "Prakash  holder",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/SELLER/Default/2023/8/332920374/VD/YN/DF/2709299/diamond-pendant-bulb-holder-1000x1000.jpg",
      Name: "Diamond holder",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://m.media-amazon.com/images/I/518mB+raT9L._SX342_SY445_.jpg",
      Name: "9V Battery HWY",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/SELLER/Default/2021/12/MQ/ZZ/GG/142868280/9w-greatwhite-led-bulb-500x500.jpg",
      Name: "9W GreatWhite Led Bulb",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/ANDROID/Default/2023/1/OL/AL/ZQ/87810570/product-jpeg-500x500.jpg",
      Name: "Surya 10W led bulb",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/SELLER/Default/2022/5/SO/VU/FV/122207974/7w-surya-neo-maxx-led-bulb-1000x1000.jpg",
      Name: "Surya 7W led bulb",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/SELLER/Default/2021/12/MF/PB/DS/119931256/surya-5-w-led-bulb-500x500.jpg",
      Name: "Surya 5W led bulb",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/SELLER/Default/2022/1/KA/LF/EG/145475558/4mm-single-core-aluminium-cable-500x500.jpg",
      Name: "4mm Aluminum Wire 4UV",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/ANDROID/Default/2021/12/JE/ZQ/ZL/8945194/product-jpeg-500x500.jpg",
      Name: "2.5mm Aluminum Wire",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/SELLER/Default/2020/12/XT/BJ/AE/41510896/1-5mm-flexible-core-aluminium-cable-500x500.jpg",
      Name: "1.5mm Aluminum Wire",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/SELLER/Default/2022/8/FR/TB/LI/68488147/electronic-table-fan-1000x1000.jpg",
      Name: "Toofan Table Fan",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/NP/QY/RG/SELLER-35110387/surya-3-in-1-led-batten-20w-tube-light-500x500.jpg",
      Name: "Surya tube light 20W led bulb",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/SELLER/Default/2022/11/RL/ZK/TL/38550340/steelgrip-electrical-insulation-tapes-500x500-500x500.webp",
      Name: "Steelgrip Tapes",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/electrical-fuse/o/m/j/6-250-fuse-6a-d-y-original-imagrv9fvu2tsfze.jpeg?q=70",
      Name: "Herson fuse",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/YN/WB/RG/SELLER-76028174/16-a-anchor-electric-switch-board-500x500.jpg",
      Name: "Bord Switch anchor",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/SELLER/Default/2020/9/YK/LZ/OQ/45519710/512-8-x-10-open-switch-box-1000x1000.jpeg",
      Name: "Bord 8*10 herson box",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/SELLER/Default/2022/9/WW/EO/FN/60378785/001-1000x1000.jpg",
      Name: "Bord 8*6 herson box",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/XX/GL/KR/SELLER-29835509/anchor-14601-penta-neon-indicator-1000x1000.jpg",
      Name: "Indicator anchor",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/SELLER/Default/2022/9/XG/YY/GE/60378785/001-1000x1000.jpg",
      Name: "Bord 7*4 herson box",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://m.media-amazon.com/images/I/41H6DrqOhtL._SX342_SY445_QL70_FMwebp_.jpg",
      Name: "Diamond indicator",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/BP/IC/SL/SELLER-50145173/diamond-5-pin-decor-multi-plug-1000x1000.jpg",
      Name: "Diamond sockrt",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://m.media-amazon.com/images/I/31WZcogZnYL._SX300_SY300_QL70_FMwebp_.jpg",
      Name: "Anchor fuse",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/SELLER/Default/2022/4/WV/XS/IZ/55358069/10-way-mcb-box-1000x1000.jpg",
      Name: "MCB box herson",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://jainelectricalhouse.com/wp-content/uploads/2022/08/Anchor-UNO-MCB-SP-C-Type-1.jpg",
      Name: "Anchor 10A MCB ",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/SELLER/Default/2022/3/TQ/JH/DC/9868929/bbd3063chh-500x500.png",
      Name: "Anchor 16A MCB",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/ECOM/Default/2023/7/322099680/CQ/SV/YS/14028312/anchor-spn-mcb-1678363582792-sku-0484-0-500x500.jpg",
      Name: "Anchor 6A MCB",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/SELLER/Default/2023/11/359563682/JG/AZ/MA/39227042/ss-combined-1000x1000.jpg",
      Name: "Anchor ss combined box",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/KC/LT/ZM/SELLER-101031868/3-in-1-ss-combine-500x500.jpg",
      Name: "S.S combind switch",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/SELLER/Default/2024/1/373787782/OQ/OS/XE/31792024/p-1-500x500.jpeg",
      Name: "3.15 candencer havells",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/SELLER/Default/2022/2/AF/EE/RQ/13838543/2-5sqmm-electrical-housing-wire-500x500.jpg",
      Name: "2.5mm,4mm,6mm wire herson",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/SC/RT/MY-28926662/32-amp-dp-switch-500x500.jpg",
      Name: "diamond dp switch",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/SELLER/Default/2023/6/315715821/MB/DA/OZ/56520793/anchor-32-amp-dp-switch-500x500.jpg",
      Name: "Anchor dp switch",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/ANDROID/Default/2022/5/PI/NH/AQ/109032290/product-jpeg-500x500.jpg",
      Name: "10/02 wire",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/SELLER/Default/2022/3/HC/GZ/YP/92137668/10-2-pvc-flexible-twisted-copper-wire-500x500.jpg",
      Name: "10/02 wire herson",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/ANDROID/Default/2020/11/BY/KT/BV/63293694/product-jpeg-500x500.jpg",
      Name: "23/76 copper wire",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://m.media-amazon.com/images/I/31tYasq14kL._SX300_SY300_QL70_FMwebp_.jpg",
      Name: "Extencen bord 3*3,4*4,6*6",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/UO/XU/YQ/SELLER-1535039/luxor-813-electric-tester-500x500.jpg",
      Name: "Tester",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/SELLER/Default/2023/3/PS/IS/NI/2366696/5-pin-multi-plug-500x500.jpg",
      Name: "Diamond 5 pin multiplug decor",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/SELLER/Default/2021/1/TR/FO/JF/16655610/16-amp-kit-kat-fuses-500x500.jpg",
      Name: "Boxer kitkat fuse 16A,32A",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://sharvielectronics.com/wp-content/uploads/2022/01/K-60-Mini-Continuity-Tester-with-LED-Light-Indicator-Sharvielectronoics.jpg",
      Name: "Continuty tester",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/SELLER/Default/2023/3/295851016/HQ/UE/IJ/36108563/surya-bulb-100-watt-1000x1000.jpg",
      Name: "100W,200W bulb surya",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/SELLER/Default/2020/10/WI/YA/XH/63083841/200w-electric-bulb-1000x1000.jpg",
      Name: "200W bulb",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/KP/ZU/QY/SELLER-13893000/surya-led-bulb-9-watt-1000x1000.jpg",
      Name: "5W led bulb surya",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/SELLER/Default/2023/4/303030435/TY/AF/HS/139132335/pixel-led-toran-multicolor-rgb-jhalar-4ft-x-30ft-10x30-500x500.jpg",
      Name: "1 Fit and 1 Meter multicolour led",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/SELLER/Default/2023/5/310225046/RV/LJ/GC/108401862/100w-philips-bulb-500x500.jpg",
      Name: "Philips 100W,200W bulb",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://images.meesho.com/images/products/180509305/auvm7_512.webp",
      Name: "Hiter spring 1500W,2000W",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/WR/TY/MY-18875264/rg6-dish-tv-cable-500x500.jpg",
      Name: "Dish wire",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/BC/MB/MY-52832484/satellite-dish-antenna-1000x1000.jpg",
      Name: "Dish antina",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/SELLER/Default/2022/2/OU/OL/ZW/116292499/dsc-0127-jpg-500x500.JPG",
      Name: "25W soldering iron",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://cdn.shopify.com/s/files/1/0695/1347/8453/files/c5c81440-791f-47e4-950d-e049d5926f75_large.jpg?v=1686932695",
      Name: "Solders westex",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/SELLER/Default/2022/6/OG/RP/BN/59068347/meco-electronic-analog-insulation-tester-mc941-500x500.jpg",
      Name: "Tester-M",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/SELLER/Default/2023/7/326547503/IP/DC/NV/50525583/ms-fan-box-10-mm-500x500.jpeg",
      Name: "Super 10 fan box metal",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://m.media-amazon.com/images/I/41G67DHe4TL._SY300_SX300_QL70_FMwebp_.jpg",
      Name: "Tape anchor",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/SELLER/Default/2022/1/MM/XD/UU/47214424/angle-holder-fancy-leda-1000x1000.png",
      Name: "Angle holder diamond",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://4.imimg.com/data4/AM/HE/MY-3059229/cable-clips-4mm-500x500.jpg",
      Name: "4mm,6mm.10mm clip pin",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/SELLER/Default/2021/11/EN/NT/XP/64788325/pidilite-flex-kwik-instant-adhesive-500x500.jpg",
      Name: "Flex kwik plus",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/SELLER/Default/2021/6/RH/ED/WC/29169132/gospell-dth-remote-500x500.jpg",
      Name: "Dth remote best and low",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/SELLER/Default/2022/7/PO/ZO/SA/130321820/duracell-aaa-4-1-500x500.jpg",
      Name: " AAA,AA battery",
      RW: "Retail & Wholesale",
    },
    {
      Image: "https://m.media-amazon.com/images/I/71p3ilBwNfL._SL1500_.jpg",
      Name: "9V tip",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/SELLER/Default/2022/9/CX/WQ/TQ/53209101/5l-shree-distilled-water-500x500.jpg",
      Name: "5 liter distel water",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/GP/HR/MY-16360669/change-overs-16-amp-500x500.jpg",
      Name: "16A changer herson",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/OZ/RT/SB/SELLER-82009266/main-switch-change-over-500x500.jpg",
      Name: "16A changer diamond",
      RW: "Retail & Wholesale",
    },
    {
      Image: "https://m.media-amazon.com/images/I/515k-3LlUSL._SL1500_.jpg",
      Name: "0.5W Led s",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/AX/KT/MY-9101457/5-watt-dc-led-bulb-1000x1000.jpg",
      Name: "Dc bulb discover 5w",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/SELLER/Default/2023/8/332915591/UI/ZF/YH/2709299/diamond-pride-1-way-modular-switches-500x500.jpg",
      Name: " Bed switch diamond",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/FC/WU/SS/SELLER-40669829/6a-3-pin-top-500x500.PNG",
      Name: "3 Pin top anchor 6A,16A",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/SELLER/Default/2023/11/362149648/LX/OK/DK/67747186/6a-3-pin-top-1000x1000.jpg",
      Name: "3 Pin top diamond 6A,16A",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/LB/XZ/BN/SELLER-76028174/900mm-bajaj-grace-gold-dx-ceiling-fan-500x500.jpg",
      Name: "India gold fan 900mm",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/SELLER/Default/2023/5/310477304/MW/HL/CW/98642176/havells-reo-fancy-angle-holder-500x500.jpg",
      Name: "Reo holder",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/SELLER/Default/2021/7/MT/IG/MR/1866252/0-75-sqmm-anchor-wire-500x500.jpg",
      Name: "Anchor 0.75mm wire",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/SELLER/Default/2023/8/331089033/GQ/NL/FH/142074721/rl-06-500x500.jpg",
      Name: " RL-06W,RL-1314 mosquito bat",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/PZ/QG/DM/SELLER-27620036/ak-324cbw-500x500.jpeg",
      Name: "Akari 324cbe mosquito bat",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/SELLER/Default/2022/10/OY/DX/EH/36827504/10w-surya-neo-emergency-bulb-500x500.jpg",
      Name: "Surya chargeable bulb 10W",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/SELLER/Default/2021/7/AT/JR/BX/28744884/anchor-roma-1m-switch-type-dimmer-1000x1000.png",
      Name: "Dimmer fan switch anchor",
      RW: "Retail & Wholesale",
    },
    {
      Image: "https://cdn.dotpe.in/longtail/store-items/7538916/4lbhHzlF.jpeg",
      Name: "Stand fan patti,5patti blade",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/ANDROID/Default/2023/10/356657127/ZW/IV/YN/122855520/product-jpeg-500x500.jpeg",
      Name: "AP blade",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/SELLER/Default/2021/9/DT/MT/TI/58505298/img20210904165643-500x500.jpg",
      Name: "Novotell stand fan",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/SELLER/Default/2023/2/CE/JJ/GN/147006301/usb-2-0-male-to-3-rca-av-composite-a-v-tv-adapter-audio-video-av-hdd-dvr-data-lead-cable-cord-1000x1000.jpg",
      Name: "A/V wire",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://4.imimg.com/data4/JP/WJ/MY-21586316/video-conferencing-mike-500x500.jpg",
      Name: "Mike to madil",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://i0.wp.com/wisycart.com/wp-content/uploads/2023/07/1-4-jpg.webp?w=1080&ssl=1",
      Name: "Fevi kwik",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://m.media-amazon.com/images/I/31uhZLThjKS._SY445_SX342_QL70_FMwebp_.jpg",
      Name: "Moter dc 1A",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/SELLER/Default/2023/5/311590068/YK/JZ/LW/43707643/magnetic-130-310-motor-solar-electric-small-engine-for-diy-accessories-500x500.png",
      Name: "Moter dc,dc-m,dc-b small",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://img.cdnx.in/37486/1622472536523_SOCKET%202PIN%20ANC%20-1.png?width=600",
      Name: "2 Pin,5 pin sawket anchor",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/SELLER/Default/2022/2/BL/TY/VQ/26640278/lumapro-20w-led-tube-light-500x500.jpeg",
      Name: "Greatwhie lumapro 20w led tubelight",
      RW: "Retail & Wholesale",
    },
    {
      Image:
        "https://5.imimg.com/data5/ANDROID/Default/2023/11/362952915/SI/WS/HL/203270306/product-jpeg-500x500.jpg",
      Name: "Toofan celling fan 900mm,1200mm",
      RW: "Retail & Wholesale",
    },

    // {
    //   Image:"",
    //   Name:"",
    //   RW:"Retail & Wholesale"
    // },
  ];

  return (
    <>
      <div className="w-[100%] h-auto mt-8 flex flex-col justify-center items-center">
        <h1 className="text-center text-3xl font-bold">Retail & Wholesale</h1>
        <h1 className="text-3xl text-center  w-[95%] sm:w-[90%] md:w-[85%] lg:w-[85%] xl:w-[85%] mt-3">
          Our Elevate your lifestyle with our premier selection of cutting-edge
          products. Experience innovation at its finest
        </h1>
      </div>
      <div className="w-[100%] h-auto flex justify-center items-center mt-10">
        <div className="w-[95%]  h-auto   grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-2 justify-items-center">
          {ProductsDetas.map((pro) => {
            return (
              <>
                <div className="sm:w-[190px] lg:w-[250px] xl:w-[250px]   w-[160px] h-auto border rounded-md">
                  <div className="w-auto h-[230px]  flex justify-center items-center">
                    <Image
                      src={pro.Image}
                      width={100}
                      height={100}
                      alt="product.png"
                      className="w-auto h-[230px]"
                    />
                  </div>
                  <h1 className="text-center text-lg font-sans mt-5 h-[50px]">
                    {pro.Name}
                  </h1>
                  <p className="text-center"> {pro.RW}</p>
                  <div className="w-auto h-auto flex justify-center items-center mt-5">
                    <a
                      href={`https://wa.me/+918540969591?text=welcome to kishan electronics store : -${pro.Name}`}
                      target="blank"
                    >
                      <div className="sm:w-[180px] w-[150px] lg:w-[200px] xl:w-[200px] h-[40px] rounded-xl mb-2 border flex justify-center items-center gap-1  cursor-pointer text-sm md:gap-4 ">
                        <Image
                          src={whatsapp}
                          alt="whatsapp.png"
                          className="w-[30px] h-auto"
                        />
                        Get Best Price
                      </div>
                    </a>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
