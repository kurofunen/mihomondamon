<section id="mihofilterarea" class="page mihofilterarea">
    <div class="wapper mihofilterWap">
        <div class="mihoArchive">
            <h2 class="typingDemo">魚の一覧を出力していくよ～！</h2>
            <ul class="ArchiveArea">
                
            </ul>
        </div>
        <button class="more">click</button>
        <div class="mihofilter">
             <svg viewbox="-300 0 600 400" width="600" height="400">
            <defs>
              <!-- 手描き感のあるラフな表現を加えるフィルターの定義 -->
              <filter id="roughFilter" filterUnits="objectBoundingBox" x="0" y="0" width="110%" height="110%">
                <!-- ノイズを生成する原始フィルター -->
                <feTurbulence type="turbulence" baseFrequency="0.001 0.01" numOctaves="5" seed="1" stitchTiles="stitch">
                  <!-- ノイズのシードをアニメーションで変化させる -->
                  <animate
                    attributeName="seed"
                    from="1"
                    to="100"
                    dur="10s"
                    repeatCount="indefinite"
                  />
                </feTurbulence>
                <!-- ノイズを元に画像を歪める -->
                <feDisplacementMap in="SourceGraphic" scale="10"/>
              </filter>
            </defs>
            <!-- 定義したフィルターを適用 -->
            <image href="img/kimawari.svg" filter="url(#roughFilter)" transform="translate(-100 100)" width="200" height="200" />
          </svg>
        </div>
        
        <a href="?id=明石">明石である</a><br>
        <a href="?id=神戸">明石でない</a>
        <p class="pram"></p>
        
        
        
    </div>
</section>

