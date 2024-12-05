import { Component, OnInit } from '@angular/core';
import { WineCardService } from '../../services/wine-card-service';
import { Wine } from '../../interfaces/winecard.interface';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';




@Component({
  selector: 'app-cards',
  imports: [CommonModule, MatCardModule,MatChipsModule, MatIconModule, MatButtonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements OnInit {

  public wine: Wine[] = [];
  public wineTitles: string[]=[];
  public wineImages: { [title: string]: string } = {};
  public wineImages1: { [title: string]: string } = {

      "Caymus 1998 Cabernet Sauvignon (Napa Valley)": "https://cdn.ct-static.com/labels/fa33b31f-99c0-4b15-ba9f-137fd08a81a1.jpg",
      "Viña Ludy 2011 Albariño (Rías Baixas)": "http://ndjohn.co.uk/cdn/shop/products/vina_ludy_albarino_2e6908e8-ec66-4c4b-9343-e1feaaf232d5.jpg?v=1553178128",
      "Éric & Jöel Durand 1999 Empreintes  (Cornas)": "https://upload.wikimedia.org/wikipedia/commons/8/8c/Portrait_d%27%C3%89ric_Zemmour%2C_avril_2022.jpg",
      "Donnachiara 2006  Taurasi": "https://www.wine-searcher.com/images/labels/98/21/11589821.jpg",
      "Tildio 2009 Malbec (Columbia Valley (WA))": "http://res.cloudinary.com/winecom/image/upload/59789_refDetail-0",
      "Paul Jaboulet Aîné 1999 La Chapelle  (Hermitage)": "https://d13qsmwwvi72rl.cloudfront.net/eyJidWNrZXQiOiJwMmdyb3VwIiwia2V5IjoiaXRlbUltYWdlcy81ZTg0NDE2MzQ1MzRiOTAwMjJkOGQ1NGMvMTU4NTcyODc2MjQ2MS0xNTg1NzI4NzU1NDQxLUNIQVBFTExFMTk5OS5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsiaGVpZ2h0Ijo2MDAsImZpdCI6ImNvbnRhaW4ifX19",
      "Château Fonréaud 2006  Listrac-Médoc": "https://cdn.ct-static.com/labels/3fe23b71-ff88-4ef4-965d-c2550bc8a473.jpg",
      "Domaine Jean-Michel Gerin 1999 La Landonne  (Côte Rôtie)": "https://images.vivino.com/thumbs/2LwH_HQJSwC7L0Lab7VvHw_pb_x600.png",
      "Vivác Winery 2009 Petite Sirah (New Mexico)": "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=100063528492320",
      "Tormentoso 2010 Cabernet Sauvignon (Paarl)": "https://dewinespot.co/cdn/shop/products/MAN_Vintners_Tormentoso_Bush_Vines_Pinotage_2010_label_0.jpg?v=1607507090&width=1214",
      "La Jota Vineyard 2007 Cabernet Sauvignon (Howell Mountain)": "https://www.lajotavineyardco.com/sites/default/files/styles/desktop_wine/public/bottle-shots/LJ_0032_Cropped_125thRelease_CKuschatka_12-2022_v2007%20edit.jpg?itok=aU9VfUsJ",
      "Reichsgraf von Kesselstatt 2009 Piesporter Goldtröpfchen Trocken GG Riesling (Mosel)": "https://www.jamessuckling.com/shared/uploads/2024/09/aeterna.jpeg",
      "Laird 2008 Red Hen Ranch Chardonnay (Oak Knoll District)": "https://www.wine-searcher.com/images/labels/37/35/10263735.jpg",
      "Excelsior 2010 Cabernet Sauvignon (Robertson)": "https://www.zachys.com/media/catalog/product/E/x/ExcelsiorEstateCS700x700.png?quality=100&bg-color=255,255,255&fit=bounds&height=420&width=420&canvas=420:420",
      "Bosman Family Vineyards 2007 Cabernet Sauvignon (Wellington)": "https://www.wine-searcher.com/images/labels/28/19/11622819.jpg",
      "Tinazzi 2009 Tenuta Valleselle Rovertondo  (Valpolicella Superiore Ripasso)": "https://images.vivino.com/thumbs/G8IJSJFyRwWhcKKxcti3_w_pb_x600.png",
      "Vignerons de Buxy 2010 Buissonnier  (Montagny)": "https://www.wine-searcher.com/images/labels/24/07/10332407.jpg",
      "Vaona 2009 Paverno  (Amarone della Valpolicella Classico)": "https://en.lespassionnesduvin.com/media/catalog/product/cache/34d95e9ca81914ec34368af20e367afa/_/1/_1_1_11371.jpg",
      "Dalla Valle 1999 Maya Red (Napa Valley)": "https://bestofwines.com/wine-images/tmp/9927_big.jpg",
      "Ca' Rugate 2010 Campo Lavei  (Valpolicella Superiore)": "https://www.gerardo.de/media/product_icons_google/ca-rugate/iwd_ca_rugate_campo_lavei.png",
      "Trenza 2010 Blanco White (Edna Valley)": "https://www.wine-searcher.com/images/labels/28/44/2008-trenza-blanco-edna-valley-750ml-10152844.jpg",
      "Summers 2009 Ranch Reserve Merlot (Knights Valley)": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/17/81/70/summers-winery.jpg?w=900&h=500&s=1",
      "La Dama 2009  Valpolicella Classico Superiore Ripasso": "https://princewinestore.com.au/media/catalog/product/9/2/92313.png?optimize=high&fit=bounds&height=500&width=500&canvas=500:500",
      "Bolla 2010 Le Poiane  (Valpolicella Classico Superiore Ripasso)": "https://manila-premiere-wines.com/wp-content/uploads/2015/06/Bolla-La-Poiane-Valpolicella-Classico-Superiore-Veneto-1.png",
      "Quilceda Creek 1998 Cabernet Sauvignon (Washington)": "https://cdn.klwines.com/images/skus/1044183x.jpg",
      "Barrel Oak 2009 Tour'ga Franc Reserve Red (Virginia)": "https://www.bbvwine.com/_next/image?url=https%3A%2F%2Fbe.bbvwine.com%2Fapp%2Fuploads%2F2024%2F01%2FNebbiolo-Reserve-2020.png&w=3840&q=75",
      "Huber 2007 Bombacher Sommerhalde R Trocken Spätburgunder (Baden)": "https://www.wine-searcher.com/images/labels/91/96/10459196.jpg?width=288&height=180&fit=bounds&canvas=288,180",
      "Colgin 1999 Herb Lamb Vineyard Cabernet Sauvignon (Napa Valley)": "https://www.winebid.com/Photo/Medium/568476",
      "J.L. Chave 1999  Hermitage": "https://www.closdesmillesimes.com/client/cache/produit/600_______topcenter_635b6177_6703.jpg",
      "Patz & Hall 2010 Chardonnay (Sonoma Coast)": "https://patzcorp.com/wp-content/uploads/2024/09/DSC_5928_2.jpg",
      "E. Guigal 1998 La Mouline  (Côte Rôtie)": "https://cdn.ct-static.com/labels/61846e48-7f05-4c01-8689-69d27e166881.jpg",
      "Stag's Leap Wine Cellars 1998 SLV Cabernet Sauvignon (Napa Valley)": "https://static.wixstatic.com/media/5415b3_64e5406e0d4a4c6699914e3c493d1b35~mv2.jpg/v1/fill/w_480,h_1100,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5415b3_64e5406e0d4a4c6699914e3c493d1b35~mv2.jpg",
      "Seven of Hearts 2010 Chatte d'Avignon G-S-M (Columbia Valley (WA))": "https://www.enobytes.com/wp-content/uploads/2012/09/Seven-of-Hearts-GSM.jpg",
      "Kingston Family 2009 Alazan Pinot Noir (Casablanca Valley)": "https://terroirreview.com/wp-content/uploads/sites/2/2018/11/IMG_5319-1260x945.jpg",
      "Xavier Flouret 2007 uQamata Red (Stellenbosch)": "https://cdn.storka.com/images/products/xavier-flouret-uqamata-red-blend-2007--18485.jpg",
      "E. Guigal 1998 La Turque  (Côte Rôtie)": "https://shop.klwines.com/_next/image?url=https%3A%2F%2Fcdn.klwines.com%2Fimages%2Fskus%2F1052860x.jpg&w=256&q=75",
      "Tildio 2011 Lonesome Spring Ranch Sauvignon Blanc (Columbia Valley (WA))": "https://savornw.com/images/articles/CathedralRidge2019CabSauv.jpg",
      "Pietro Zardini 2008 Austero  (Valpolicella Superiore Ripasso)": "https://www.wine-searcher.com/images/labels/29/25/10402925.jpg",
      "Würtz 2008 Geyerscheiss Riesling (Rheinhessen)": "https://img.yumpu.com/7430128/1/500x640/buying-guide-june-2011-wine-enthusiast-magazine.jpg",
      "Naggiar 2009 Estate grown Syrah (Sierra Foothills)": "https://naggiarvineyards.com/wordpress/wp-content/uploads/2021/02/2017-La-Boheme-scaled.jpeg",
      "Switchback Ridge 1999 Cabernet Sauvignon (Napa Valley)": "https://cultwine.com/cdn/shop/files/FullSizeRender_1024x1024.heic?v=1709584093",
      "Ramón Bilbao 2011 Valiñas Albariño (Rías Baixas)": "https://images.gotoliquorstore.com/product/1000017185/6d892ee5-b0c6-4662-946f-86b74cefdc05_360_m.jpg",
      "Stag's Leap Wine Cellars 1998 Cask 23 Red (Napa Valley)": "https://assets.wine.com/winecom/image/upload/w_600,h_600,dpr_2.0,c_fit,q_auto:good,fl_progressive/oiq9dlpyi1r5whow4moc.jpg",
      "Tedeschi 2011 Lucchine  (Valpolicella Classico)": "https://www.wine-searcher.com/images/labels/59/62/11635962.jpg",
      "Vincent 2010 Marie-Antoinette  (Pouilly-Fuissé)": "https://assets.wine.com/winecom/image/upload/w_600,h_600,dpr_2.0,c_fit,q_auto:good,fl_progressive/118412fbs.jpg",
      "Veramar 2008 Estate Bottled Norton (Shenandoah Valley)": "https://www.virginiawine.org/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbHNmIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6dea41f5f15992a30206e9e867529885901bce62/2012.png",
      "Vignerons de Buxy 2010 Buissonnier  (Côte Chalonnaise)": "https://cdn.ct-static.com/labels/b0f16e74-a851-4f58-86cc-020d64fffdbe.jpg",
      "Fournier Père et Fils 2009 Côtes de Morogues  (Menetou-Salon)": "https://www.fournier-pere-fils.com/en/wp-content/uploads/sites/3/2020/11/Cotes-de-Morogues-blanc.png",
      "Dalla Valle 1999 Cabernet Sauvignon (Napa Valley)": "https://cdn.ct-static.com/labels/d045c7c4-5fc1-4f2c-9417-f1bf591d4dfa.jpg",
      "Hartenberg 2006 The Mackenzie Red (Stellenbosch)": "https://image.invaluable.com/housePhotos/Strauss/42/711742/H4145-L271940966.jpg",
      "Joseph Drouhin 2010 La Forêt  (Bourgogne)": "https://cdn.ct-static.com/labels/3d8ae609-97ff-4345-a2aa-9247af65be0a.jpg",
      "Airfield Estates 2011 Pinot Gris (Yakima Valley)": "https://cdn.ct-static.com/labels/c49b0d57-05cd-4a90-b08a-7b69e7c31814.jpg",
      "Santi 2010 Solane  (Valpolicella Classico Superiore Ripasso)": "http://wandamann.typepad.com/.a/6a00e553bc02c9883301bb07bccd5e970d-pi",
      "Delas Frères 1999 Les Bessards  (Hermitage)": "https://cdn.ct-static.com/labels/09a4bcd2-b892-492e-8ea1-6c809be0b050.jpg",
      "Occasio 2011 Del Arroyo Vineyard Pinot Gris (Livermore Valley)": "https://occasiowinery.com/wp-content/uploads/2023/10/occasio-winery-founders-collection-petite-sirah-2011-1024x683.jpg",
      "Nanni Copé 2008 Sabbie di Sopra il Bosco Red (Terre del Volturno)": "https://images.vivino.com/thumbs/IE24SrjmRcOWlwgW-4MrMQ_pb_x960.png",
      "Boekenhoutskloof 2008 The Chocolate Block Red (Western Cape)": "https://www.wine-searcher.com/images/labels/92/56/11639256.jpg",
      "Brandborg 2009 Gewürztraminer (Umpqua Valley)": "https://shop.klwines.com/_next/image?url=https%3A%2F%2Fcdn.klwines.com%2Fimages%2Fskus%2Fshiner_white_x.jpg&w=256&q=75",
      "M. Chapoutier 1999 Le Méal Ermitage  (Hermitage)": "https://www.chapoutier.com/media/cache//Boutique/Primeurs/l/e/le_meal_rouge_aop_446x1500.png",
      "Nickel & Nickel 2009 C.C. Ranch Cabernet Sauvignon (Rutherford)": "https://upload.wikimedia.org/wikipedia/commons/7/72/Jefferson-Nickel-Unc-Obv.jpg",
      "Porcupine Ridge 2010 Syrah (Coastal Region)": "https://i0.wp.com/gregsherwoodmw.com/wp-content/uploads/2024/01/img_6532-1.jpg?resize=656%2C656&ssl=1",
      "Hartenberg 2007 The Stork Shiraz (Stellenbosch)": "https://www.weinbaule.de/images/hartenberg-the-stork-shiraz.jpg",
      "Gadais Père et Fils 2009 Vieilles Vignes Sur Lie  (Muscadet Sèvre et Maine)": "https://champagnesandchateaux.co.uk/wp-content/uploads/2021/08/Peninsula-Gadais-b-scaled.jpg",
      "Maculan 2010 Brentino Red (Veneto)": "https://www.sokolin.com/media/catalog/product/cache/d2f4c4426f28703fb0827e67fb717787/2/0/2017-Maculan-Fratta-Italy-Red-750-ml-103993-750-AI.jpg",
      "Georges Duboeuf 2011  Saint-Véran": "http://vinodelice.com/cdn/shop/products/80_Saint-V_C3_A9ran_Cuv_C3_A9e_Prestige_Georges_Duboeuf_2022_FR.png?v=1687842563",
      "Winery of Good Hope 2011 Unoaked Chardonnay (Stellenbosch)": "https://goodwineshop.co.za/wp-content/uploads/2019/01/GWS-The-Winery-of-Good-Hope-Unoaked-Chardonnay.jpg",
      "S.A. Prüm 2009 Wehlener Sonnenuhr Kabinett Riesling (Mosel)": "https://cdn.klwines.com/images/skus/1149160x.jpg",
      "Musella 2010  Valpolicella Superiore": "https://assets.wine.com/winecom/image/upload/w_600,h_600,dpr_2.0,c_fit,q_auto:good,fl_progressive/191279_refDetail-0.jpg",
      "Musella 2009  Valpolicella Superiore Ripasso": "https://cdn.ct-static.com/labels/d32d1672-1f44-4a11-bf95-e490e03e30e9.jpg",
      "Tangent 2011 Paragon Vineyard Albariño (Edna Valley)": "https://www.wineenthusiast.com/wp-content/assets/reviews/label-images/wine/wine/158443_95BE_NOV12_3100.jpg",
      "Kumeu River 2008 Coddington Chardonnay (Kumeu)": "https://images.vivino.com/thumbs/2RG_fxuKSLqL5Isy9N3YLA_pb_x960.png",
      "Keenan 2009 Merlot (Napa Valley)": "https://cpdwineliquor.com/cdn/shop/products/NL548538.png?v=1604154476",
      "Augusta Winery 2009 Chambourcin (Augusta)": "https://pbs.twimg.com/media/Ek29yXYWAAA6sEU.jpg",
      "E. Guigal 1999  Hermitage": "https://cdn.ct-static.com/labels/969e4ed7-4ae6-462b-9353-81aa27146aa9.jpg",
      "Errazuriz 2008 The Blend Limited Edition Red (Aconcagua Valley)": "https://worldoffinewine.com/wp-content/uploads/sites/9/2024/10/vfch_eduardo_chadwick22-1038x778.webp",
      "Gilbert Cellars 2008 the pilgrim Red (Wahluke Slope)": "https://www.wineenthusiast.com/wp-content/assets/reviews/label-images/wine/wine/345564_106BE_AUG20.jpg",
      "Lange 2009 Reserve Pinot Noir (Willamette Valley)": "https://d13jicmd7uan86.cloudfront.net/ffb5fb74-553d-48f1-84ec-ae770155cdf5.png",
      "Joel Gott 2008 Dillian Ranch Zinfandel (Amador County)": "https://shop.klwines.com/_next/image?url=https%3A%2F%2Fcdn.klwines.com%2Fimages%2Fskus%2Fgenericred-xl.jpg&w=256&q=75",
      "Dry River 2009 Late Harvest Riesling (Martinborough)": "https://auctions.webbs.co.nz/images/lot/5584/55843_xl.jpg?ts=1724802405",
      "Trapiche 2011 Oak Cask Syrah (Mendoza)": "https://www.pfiwestern.com/media/catalog/product/cache/12946f501fb8eea9b0b25f6c3c116ad9/image/25475a330/trapiche-oak-cask-syrah.jpg",
      "Windsor Oaks 2007 Clone 667 Pinot Noir (Russian River Valley)": "https://blog.wineroutes.com/wp-content/uploads/2023/10/Hamilton-Family-Wines-Wine-Routes-23.jpg",
      "Pride Mountain 1999 Merlot (Napa-Sonoma)": "https://assets.straussart.co.za/t_zoom/items/0881/088101/pride-mountain-vineyards-merlot-1999-3-1-x-3-750ml-sito46.jpg",
      "Montes 2010 Limited Selection Sauvignon Blanc (Leyda Valley)": "https://www.monteswines.com/images/botella/2021060811219000000.png",
      "Dr. Loosen 2009 Wehlener Sonnenuhr Spätlese Riesling (Mosel)": "https://images.vivino.com/thumbs/DyCaf-0yQr-qYZOXQQdvNw_pb_x600.png",
      "Six Mile Creek 2009 Cabernet Franc (Finger Lakes)": "https://www.wine-searcher.com/images/labels/42/30/10374230.jpg?width=288&height=180&fit=bounds&canvas=288,180",
      "Guardian Peak 2010 Shiraz (Western Cape)": "https://www.wine-searcher.com/images/labels/52/99/10395299.jpg?width=175&height=234&fit=bounds&canvas=180,240",
      "Feudi di San Gregorio 2009 Pietracalda  (Fiano di Avellino)": "https://static.xtrawine.com/images/products/wines/feudi-san-gregorio-fiano-di-avellino-riserva-pietracalda-2022_42718_1.webp",
      "Vignerons de Buxy 2011 Côtes d'Auxerre  (Bourgogne)": "https://cdn11.bigcommerce.com/s-a40t0ks6x1/images/stencil/1280x1280/products/2002/1982/Domaine_dEdouard_Gourgogne_Blanc_Les_Colinnes_de_Vaux__89478.1656366529.jpg?c=1",
      "Mount Pleasant Winery 2010 Estates St. Vincent (Augusta)": "https://www.wineenthusiast.com/wp-content/uploads/2024/04/04_24_The_Best_Tannat_Wines_to_Drink_Right_Now_HERO_BeverageWarehouse_MCV_blackpoolmattswineclub_Allegretto_1920x1280.jpg",
      "Paul Jaboulet Aîné 1999 Chevalier de Sterimberg White (Hermitage)": "https://cdn.ct-static.com/labels/589bbed1-5744-4e10-aa61-6a90c987adee.jpg",
      "Michael David 2010 Petite Petit Red (Lodi)": "https://winehours.com/image/cache/catalog/Wine%20Shop/Michael%20David%20Winery%20Petite%20Petit%204-360x360.jpg",
      "Lakewood 2009 Cabernet Franc (Finger Lakes)": "https://i0.wp.com/carolyncovington.com/wp-content/uploads/2024/07/IMG_1320-min.jpg?resize=768%2C1024&ssl=1",
      "E. Guigal 1999 Brune et Blonde  (Côte Rôtie)": "https://cdn.ct-static.com/labels/33d9e968-d91b-440f-9c98-9809f2ffa899.jpg",
      "Archery Summit 2008 Premier Cuvée Pinot Noir (Willamette Valley)": "https://web-wine-live.s3-eu-west-1.amazonaws.com/s3fs-public/styles/product_current/public/5047629-001.JPG?itok=vDSsOEPd",
      "Hedges 1999 Red Mountain Reserve Cabernet Sauvignon (Columbia Valley (WA))": "https://godello.ca/wp-content/uploads/2024/01/red-mountain-syrah.jpg",
      "Pedroncelli 2010 Bench Vineyards Merlot (Dry Creek Valley)": "https://assets.wine.com/winecom/image/upload/w_600,h_600,dpr_2.0,c_fit,q_auto:good,fl_progressive/118269.jpg",
      "White Springs 2009 Sauvignon Blanc (Finger Lakes)": "https://enjoy.ravineswine.com/assets/images/products/pictures/SauvBlanc.17-PWADRC.jpg",
      "Nuiton-Beaunoy 2010 Réserve  (Bourgogne)": "https://www.finewinedirect.co.uk/cdn/shop/products/pinot_noir_473x473.jpg?v=1574269545",
      "Bouchard Père & Fils 2010 Réserve  (Bourgogne)": "https://sommailier.com/wp-content/uploads/2024/04/Bouchard-Pommard-1er-Cru-2019-scaled.jpg",
      "Windsor Oaks 2007 Clone 777 Pinot Noir (Russian River Valley)": "x-raw-image:///44dba3928bea5373b9de642217cb9fa9b4cd1f3121236885e1fc9b0103039744"


  };

  constructor(private wineService: WineCardService) {

  }
  ngOnInit(): void {
    this.getBottlesAll();

  }

  getBottlesAll() {
    this.wineService.getAllBottles().subscribe(data => {
      this.wine = data.slice(0,100);
      console.log(this.wine);
      this.wineTitles= this.wine.map((bottle:{title:string})=> bottle.title)
      console.log(this.wineTitles)

    
    })
  }





}
