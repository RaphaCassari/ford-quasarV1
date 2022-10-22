<template>
  <q-page class="flex flex-center">
    <div
      class="q-pa-md row items-start q-gutter-md"
      v-if="this.$route.params.car == 'kahatch'"
    >
      <div v-if="!liked && this.$route.params.car == 'kahatch'">
        <div class="text-h5 q-mt-sm q-mb-xs">Ford Ka Hatchback</div>
        <img
          src="https://www.karvi.com.br/_next/image/?url=https%3A%2F%2Fdjdnloyvqzzd3.cloudfront.net%2Fbr%2Fmodels%2Fford%2Fka-hatch%2Fdesktop%2Fthumbnail%2Fford-ka-hatch_thumbnail.jpg&w=1536&q=75"
        />
        <div class="btns">
          <img src="../assets/nope.png" @click="backToForm()" />
          <img src="../assets/like.png" @click="liked = true" />
        </div>
      </div>
      <q-card class="my-card" v-if="liked && this.$route.params.car == 'kahatch'">
        <div class="text-h5 q-mt-sm q-mb-xs">Ford Ka Hatchback</div>
        <img
          src="https://www.karvi.com.br/_next/image/?url=https%3A%2F%2Fdjdnloyvqzzd3.cloudfront.net%2Fbr%2Fmodels%2Fford%2Fka-hatch%2Fdesktop%2Fthumbnail%2Fford-ka-hatch_thumbnail.jpg&w=1536&q=75"
        />

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">$$</div>
          <div class="text-caption">
            Econômico, simples e comfortável, o melhor das três combinações
          </div>
          <!--Trocar aqui-->
        </q-card-section>

        <q-list>
          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="red" name="local_gas_station" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Tipo de Combustivel:</q-item-label>
              <q-item-label caption>FLEX</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Número de Portas:</q-item-label>
              <q-item-label caption>4</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Tração Dianteira</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Transmissão Automática/Manual</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Tanque de 52L</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Ar Condicionado</q-item-label>
            </q-item-section>
          </q-item>

          <q-expansion-item
            expand-separator
            icon="mail"
            label="Detalhes do Motor"
            content-inset-level="2"
          >
            <!-- Detalhe talvez tire depois, ta ai pra testar -->
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="local_movies" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Motor</q-item-label>
                <q-item-label caption>1.5 FLEX</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="local_movies" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Potência</q-item-label>
                <q-item-label caption>110 cv</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="local_movies" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Torque</q-item-label>
                <q-item-label caption>137 Nm</q-item-label>
              </q-item-section>
            </q-item>
          </q-expansion-item>
        </q-list>
      </q-card>
    </div>
    <div
      class="q-pa-md row items-start q-gutter-md"
      v-if="this.$route.params.car == 'transit'"
    >
      <div v-if="!liked && this.$route.params.car == 'transit'">
        <div class="text-h5 q-mt-sm q-mb-xs">Ford Transit</div>
        <img
          src="https://www.ford.com.br/content/dam/Ford/website-assets/latam/br/nameplate/2022/transit/360/exterior/fbr-transit-360-01.jpg.dam.full.high.jpg/1633639408687.jpg"
        />
        <div class="btns">
          <img src="../assets/nope.png" @click="backToForm()" />
          <img src="../assets/like.png" @click="liked = true" />
        </div>
      </div>
      <q-card class="my-card" v-if="liked && this.$route.params.car == 'transit'">
        <div class="text-h5 q-mt-sm q-mb-xs">Ford Transit</div>
        <img
          src="https://www.ford.com.br/content/dam/Ford/website-assets/latam/br/nameplate/2022/transit/360/exterior/fbr-transit-360-01.jpg.dam.full.high.jpg/1633639408687.jpg"
        />

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">$$$$</div>
          <div class="text-caption">
            Se muito espaço é o que você precisa, a Transit é sua melhor opção
          </div>
          <!--Trocar aqui-->
        </q-card-section>

        <q-list>
          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="red" name="local_gas_station" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Tipo de Combustivel:</q-item-label>
              <q-item-label caption>Diesel</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Número de Portas:</q-item-label>
              <q-item-label caption>4</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Travamento Automático de Portas</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Transmissão Automática</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Câmera Traseira</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>2 Air Bags</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Sensor de Estacionamento Traseiro</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Start & Stop</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Ar Condicionado</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Limitador de Velocidade</q-item-label>
            </q-item-section>
          </q-item>

          <q-expansion-item expand-separator icon="mail" label="Detalhes do Motor">
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="local_movies" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Motor</q-item-label>
                <q-item-label caption>Diesel 2.0 EcoBlue</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="local_movies" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Potência</q-item-label>
                <q-item-label caption>170 cv @ 3500 rpm</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="local_movies" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Torque</q-item-label>
                <q-item-label caption>397 Nm @ 2500 rpm</q-item-label>
              </q-item-section>
            </q-item>
          </q-expansion-item>
        </q-list>
      </q-card>
    </div>
    <div
      class="q-pa-md row items-start q-gutter-md"
      v-if="this.$route.params.car == 'focus'"
    >
      <div v-if="!liked && this.$route.params.car == 'focus'">
        <div class="text-h5 q-mt-sm q-mb-xs">Ford Focus</div>
        <img
          src="https://quatrorodas.abril.com.br/wp-content/uploads/2022/02/er-is-weer-een-vernieuwde-ford-focus-2022-970-10.jpg?quality=70&strip=info"
        />
        <div class="btns">
          <img src="../assets/nope.png" @click="backToForm()" />
          <img src="../assets/like.png" @click="liked = true" />
        </div>
      </div>
      <q-card class="my-card" v-if="liked && this.$route.params.car == 'focus'">
        <div class="text-h5 q-mt-sm q-mb-xs">Ford Focus</div>
        <img
          src="https://quatrorodas.abril.com.br/wp-content/uploads/2022/02/er-is-weer-een-vernieuwde-ford-focus-2022-970-10.jpg?quality=70&strip=info"
        />

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">$$</div>
          <div class="text-caption">
            Se estilo e espaço é o que você procura, o Focus seria a combinação perfeita
          </div>
          <!--Trocar aqui-->
        </q-card-section>

        <q-list>
          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="red" name="local_gas_station" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Tipo de Combustivel:</q-item-label>
              <q-item-label caption>Flex</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Número de Portas:</q-item-label>
              <q-item-label caption>4</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Freio a Disco com ABS</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Transmissão Automática</q-item-label>
            </q-item-section>
          </q-item>

          <q-expansion-item
            expand-separator
            icon="mail"
            label="Detalhes do Motor"
            content-inset-level="1"
          >
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="local_movies" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Motor</q-item-label>
                <q-item-label caption>Duratec</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="local_movies" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Potência</q-item-label>
                <q-item-label caption>178 cv @ 6500 rpm</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="local_movies" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Torque</q-item-label>
                <q-item-label caption>220 Nm @ 4500 rpm</q-item-label>
              </q-item-section>
            </q-item>
          </q-expansion-item>
        </q-list>
      </q-card>
    </div>
    <div
      class="q-pa-md row items-start q-gutter-md"
      v-if="this.$route.params.car == 'fiesta'"
    >
      <div v-if="!liked && this.$route.params.car == 'fiesta'">
        <div class="text-h5 q-mt-sm q-mb-xs">Ford Fiesta</div>
        <img
          src="https://www.karvi.com.br/_next/image/?url=https%3A%2F%2Fdjdnloyvqzzd3.cloudfront.net%2Fbr%2Fmodels%2Fford%2Fka-hatch%2Fdesktop%2Fthumbnail%2Fford-ka-hatch_thumbnail.jpg&w=1536&q=75"
        />
        <div class="btns">
          <img src="../assets/nope.png" @click="backToForm()" />
          <img src="../assets/like.png" @click="liked = true" />
        </div>
      </div>
      <q-card class="my-card" v-if="liked && this.$route.params.car == 'fiesta'">
        <div class="text-h5 q-mt-sm q-mb-xs">Ford Fiesta</div>
        <img
          src="https://www.karvi.com.br/_next/image/?url=https%3A%2F%2Fdjdnloyvqzzd3.cloudfront.net%2Fbr%2Fmodels%2Fford%2Ffiesta%2Fdesktop%2Fthumbnail%2Fford_fiesta_thumbnail.jpg&w=1536&q=75"
        />

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">$$$</div>
          <div class="text-caption">
            Econômico, simples e comfortável, o melhor das três combinações
          </div>
          <!--Trocar aqui-->
        </q-card-section>

        <q-list>
          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="red" name="local_gas_station" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Tipo de Combustivel:</q-item-label>
              <q-item-label caption>Flex</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Número de Portas:</q-item-label>
              <q-item-label caption>4</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Ar condicionado digital</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Controles de estabilidade e tração</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Assistende em partida em rampas</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Sensor de estacionamento traseiro</q-item-label>
            </q-item-section>
          </q-item>

          <q-expansion-item expand-separator icon="mail" label="Detalhes do Motor">
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="local_movies" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Motor</q-item-label>
                <q-item-label caption>1.6 Aspirado</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="local_movies" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Potência</q-item-label>
                <q-item-label caption>128 cv</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="local_movies" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Torque</q-item-label>
                <q-item-label caption>156 Nm</q-item-label>
              </q-item-section>
            </q-item>
          </q-expansion-item>
        </q-list>
      </q-card>
    </div>
    <div
      class="q-pa-md row items-start q-gutter-md"
      v-if="this.$route.params.car == 'escort'"
    >
      <div v-if="!liked && this.$route.params.car == 'escort'">
        <div class="text-h5 q-mt-sm q-mb-xs">Ford Escort</div>
        <img
          src="https://img2.gratispng.com/20180808/otu/kisspng-ford-escort-compact-car-ford-orion-escort-promo-code-project-juan-tk-5b6ba9dc48bd44.903379211533782492298.jpg"
        />
        <div class="btns">
          <img src="../assets/nope.png" @click="backToForm()" />
          <img src="../assets/like.png" @click="liked = true" />
        </div>
      </div>
      <q-card class="my-card" v-if="liked && this.$route.params.car == 'escort'">
        <div class="text-h5 q-mt-sm q-mb-xs">Ford Escort</div>
        <img
          src="https://img2.gratispng.com/20180808/otu/kisspng-ford-escort-compact-car-ford-orion-escort-promo-code-project-juan-tk-5b6ba9dc48bd44.903379211533782492298.jpg"
        />

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">$</div>
          <div class="text-caption">Econômico e Elegante</div>
          <!--Trocar aqui-->
        </q-card-section>

        <q-list>
          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="red" name="local_gas_station" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Tipo de Combustivel:</q-item-label>
              <q-item-label caption>Gasolina</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Número de Portas:</q-item-label>
              <q-item-label caption>4</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Câmbio Manual</q-item-label>
            </q-item-section>
          </q-item>

          <q-expansion-item expand-separator icon="mail" label="Detalhes do Motor">
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="local_movies" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Motor</q-item-label>
                <q-item-label caption>Zetec</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="local_movies" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Potência</q-item-label>
                <q-item-label caption>115 cv @ 5750 rpm</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="local_movies" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Torque</q-item-label>
                <q-item-label caption>159 Nm @ 4500 rpm</q-item-label>
              </q-item-section>
            </q-item>
          </q-expansion-item>
        </q-list>
      </q-card>
    </div>
    <div
      class="q-pa-md row items-start q-gutter-md"
      v-if="this.$route.params.car == 'edge'"
    >
      <div v-if="!liked && this.$route.params.car == 'edge'">
        <div class="text-h5 q-mt-sm q-mb-xs">Ford EDGE ST</div>
        <img
          src="https://www.karvi.com.br/_next/image/?url=https%3A%2F%2Fdjdnloyvqzzd3.cloudfront.net%2Fbr%2Fmodels%2Fford%2Fedge-st%2Fdesktop%2Fthumbnail%2Fford-edge-st_thumbnail.jpg&w=1536&q=75"
        />
        <div class="btns">
          <img src="../assets/nope.png" @click="backToForm()" />
          <img src="../assets/like.png" @click="liked = true" />
        </div>
      </div>
      <q-card class="my-card" v-if="liked && this.$route.params.car == 'edge'">
        <div class="text-h5 q-mt-sm q-mb-xs">Ford EDGE ST</div>
        <img
          src="https://www.karvi.com.br/_next/image/?url=https%3A%2F%2Fdjdnloyvqzzd3.cloudfront.net%2Fbr%2Fmodels%2Fford%2Fedge-st%2Fdesktop%2Fthumbnail%2Fford-edge-st_thumbnail.jpg&w=1536&q=75"
        />

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">$$$$</div>
          <div class="text-caption">Para quem busca segurança e velocidade</div>
          <!--Trocar aqui-->
        </q-card-section>

        <q-list>
          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="red" name="local_gas_station" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Tipo de Combustivel:</q-item-label>
              <q-item-label caption>Gasolina</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Número de Portas:</q-item-label>
              <q-item-label caption>4</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Piloto Automático Adaptativo</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Sistema de permanência em faixa</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>8 Air bags</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Park Assist</q-item-label>
            </q-item-section>
          </q-item>

          <q-expansion-item expand-separator icon="mail" label="Detalhes do Motor">
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="local_movies" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Motor</q-item-label>
                <q-item-label caption>2.7 v6 Biturbo</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="local_movies" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Potência</q-item-label>
                <q-item-label caption>335 cv</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="local_movies" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Torque</q-item-label>
                <q-item-label caption>534 Nm</q-item-label>
              </q-item-section>
            </q-item>
          </q-expansion-item>
        </q-list>
      </q-card>
    </div>
    <div
      class="q-pa-md row items-start q-gutter-md"
      v-if="this.$route.params.car == 'ecosport'"
    >
      <div v-if="!liked && this.$route.params.car == 'ecosport'">
        <div class="text-h5 q-mt-sm q-mb-xs">Ford EcoSport</div>
        <img
          src="https://www.karvi.com.br/_next/image/?url=https%3A%2F%2Fdjdnloyvqzzd3.cloudfront.net%2Fbr%2Fmodels%2Fford%2Fecosport%2Fdesktop%2Fthumbnail%2Fford-ecosport_thumbnail.jpg&w=1536&q=75"
        />
        <div class="btns">
          <img src="../assets/nope.png" @click="backToForm()" />
          <img src="../assets/like.png" @click="liked = true" />
        </div>
      </div>
      <q-card class="my-card" v-if="liked && this.$route.params.car == 'ecosport'">
        <div class="text-h5 q-mt-sm q-mb-xs">Ford EcoSport</div>
        <img
          src="https://www.karvi.com.br/_next/image/?url=https%3A%2F%2Fdjdnloyvqzzd3.cloudfront.net%2Fbr%2Fmodels%2Fford%2Fecosport%2Fdesktop%2Fthumbnail%2Fford-ecosport_thumbnail.jpg&w=1536&q=75"
        />

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">$$$</div>
          <div class="text-caption">Para quem busca economia e design esportivo</div>
          <!--Trocar aqui-->
        </q-card-section>

        <q-list>
          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="red" name="local_gas_station" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Tipo de Combustivel:</q-item-label>
              <q-item-label caption>Flex</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Número de Portas:</q-item-label>
              <q-item-label caption>4</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>7 Airbags</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Transmissão Automática</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Sensor de ponto cego</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Teto-Solar elétrico</q-item-label>
            </q-item-section>
          </q-item>

          <q-expansion-item expand-separator icon="mail" label="Detalhes do Motor">
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="local_movies" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Motor</q-item-label>
                <q-item-label caption>1.5 Aspirado</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="local_movies" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Potência</q-item-label>
                <q-item-label caption>137 cv</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="local_movies" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Torque</q-item-label>
                <q-item-label caption>158 Nm</q-item-label>
              </q-item-section>
            </q-item>
          </q-expansion-item>
        </q-list>
      </q-card>
    </div>
    <div
      class="q-pa-md row items-start q-gutter-md"
      v-if="this.$route.params.car == 'corcel'"
    >
      <div v-if="!liked && this.$route.params.car == 'corcel'">
        <div class="text-h5 q-mt-sm q-mb-xs">Ford Corcel</div>
        <img
          src="http://jornalperiscopio.com.br/site/wp-content/uploads/2018/07/corcel.jpg"
        />
        <div class="btns">
          <img src="../assets/nope.png" @click="backToForm()" />
          <img src="../assets/like.png" @click="liked = true" />
        </div>
      </div>
      <q-card class="my-card" v-if="liked && this.$route.params.car == 'corcel'">
        <div class="text-h5 q-mt-sm q-mb-xs">Ford Corcel</div>
        <img
          src="http://jornalperiscopio.com.br/site/wp-content/uploads/2018/07/corcel.jpg"
        />

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">$</div>
          <div class="text-caption">O mais marcante para os amantes da velha-guarda</div>
          <!--Trocar aqui-->
        </q-card-section>

        <q-list>
          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="red" name="local_gas_station" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Tipo de Combustivel:</q-item-label>
              <q-item-label caption>Diesel</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Número de Portas:</q-item-label>
              <q-item-label caption>4</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>2 Air Bags</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Câmbio manual</q-item-label>
            </q-item-section>
          </q-item>

          <q-expansion-item expand-separator icon="mail" label="Detalhes do Motor">
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="local_movies" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Motor</q-item-label>
                <q-item-label caption>Sierra</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="local_movies" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Potência</q-item-label>
                <q-item-label caption>68 cv @ 5200 rpm</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="local_movies" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Torque</q-item-label>
                <q-item-label caption>74 Nm @ 3200 rpm</q-item-label>
              </q-item-section>
            </q-item>
          </q-expansion-item>
        </q-list>
      </q-card>
    </div>
    <div
      class="q-pa-md row items-start q-gutter-md"
      v-if="this.$route.params.car == 'bronco'"
    >
      <div v-if="!liked && this.$route.params.car == 'bronco'">
        <div class="text-h5 q-mt-sm q-mb-xs">Ford Bronco</div>
        <img
          src="https://www.ford.com.br/content/ford/br/pt_br/home/ofertas-ford/bronco-sport-ecoboost-2022/jcr:content/par/splitter/splitter1/billboard/imageComponent/image.imgs.full.high.png"
        />
        <div class="btns">
          <img src="../assets/nope.png" @click="backToForm()" />
          <img src="../assets/like.png" @click="liked = true" />
        </div>
      </div>
      <q-card class="my-card" v-if="liked && this.$route.params.car == 'bronco'">
        <div class="text-h5 q-mt-sm q-mb-xs">Ford Bronco</div>
        <img
          src="https://www.ford.com.br/content/ford/br/pt_br/home/ofertas-ford/bronco-sport-ecoboost-2022/jcr:content/par/splitter/splitter1/billboard/imageComponent/image.imgs.full.high.png"
        />

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">$$$</div>
          <div class="text-caption">O melhor para passeios em terrenos hostis</div>
          <!--Trocar aqui-->
        </q-card-section>

        <q-list>
          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="red" name="local_gas_station" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Tipo de Combustivel:</q-item-label>
              <q-item-label caption>Gasolina</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Número de Portas:</q-item-label>
              <q-item-label caption>4</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Sistema de permanência em faixa</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Transmissão Automática</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>7 modos de condução off-road</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>9 Air Bags</q-item-label>
            </q-item-section>
          </q-item>

          <q-expansion-item expand-separator icon="mail" label="Detalhes do Motor">
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="local_movies" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Motor</q-item-label>
                <q-item-label caption>2.0 Turbo</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="local_movies" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Potência</q-item-label>
                <q-item-label caption>253 cv</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="local_movies" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Torque</q-item-label>
                <q-item-label caption>379 Nm</q-item-label>
              </q-item-section>
            </q-item>
          </q-expansion-item>
        </q-list>
      </q-card>
    </div>
    <div
      class="q-pa-md row items-start q-gutter-md"
      v-if="this.$route.params.car == 'fusion'"
    >
      <div v-if="!liked && this.$route.params.car == 'fusion'">
        <div class="text-h5 q-mt-sm q-mb-xs">Ford Fusion</div>
        <img
          src="https://www.karvi.com.br/_next/image/?url=https%3A%2F%2Fdjdnloyvqzzd3.cloudfront.net%2Fbr%2Fmodels%2Fford%2Ffusion%2Fdesktop%2Fthumbnail%2Fford-fusion_thumbnail.jpg&w=1536&q=75"
        />
        <div class="btns">
          <img src="../assets/nope.png" @click="backToForm()" />
          <img src="../assets/like.png" @click="liked = true" />
        </div>
      </div>
      <q-card class="my-card" v-if="liked && this.$route.params.car == 'fusion'">
        <div class="text-h5 q-mt-sm q-mb-xs">Ford Fusion</div>
        <img
          src="https://www.karvi.com.br/_next/image/?url=https%3A%2F%2Fdjdnloyvqzzd3.cloudfront.net%2Fbr%2Fmodels%2Fford%2Ffusion%2Fdesktop%2Fthumbnail%2Fford-fusion_thumbnail.jpg&w=1536&q=75"
        />

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">$$$</div>
          <div class="text-caption">Alta potência e elegância</div>
          <!--Trocar aqui-->
        </q-card-section>

        <q-list>
          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="red" name="local_gas_station" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Tipo de Combustivel:</q-item-label>
              <q-item-label caption>Diesel</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Número de Portas:</q-item-label>
              <q-item-label caption>4</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Travamento Automático de Portas</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Transmissão Automática</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Câmera Traseira</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>2 Air Bags</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Sensor de Estacionamento Traseiro</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Start & Stop</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Ar Condicionado</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Limitador de Velocidade</q-item-label>
            </q-item-section>
          </q-item>

          <q-expansion-item expand-separator icon="mail" label="Detalhes do Motor">
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="local_movies" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Motor</q-item-label>
                <q-item-label caption>Diesel 2.0 EcoBlue</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="local_movies" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Potência</q-item-label>
                <q-item-label caption>170 cv @ 3500 rpm</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="local_movies" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Torque</q-item-label>
                <q-item-label caption>397 Nm @ 2500 rpm</q-item-label>
              </q-item-section>
            </q-item>
          </q-expansion-item>
        </q-list>
      </q-card>
    </div>
    <div
      class="q-pa-md row items-start q-gutter-md"
      v-if="this.$route.params.car == 'kasedan'"
    >
      <div v-if="!liked && this.$route.params.car == 'kasedan'">
        <div class="text-h5 q-mt-sm q-mb-xs">Ford Ka Sedan</div>
        <img
          src="https://www.karvi.com.br/_next/image/?url=https%3A%2F%2Fdjdnloyvqzzd3.cloudfront.net%2Fbr%2Fmodels%2Fford%2Fka-sedan%2Fdesktop%2Fthumbnail%2Fford-ka-sedan_thumbnail.jpg&w=1536&q=75"
        />
        <div class="btns">
          <img src="../assets/nope.png" @click="backToForm()" />
          <img src="../assets/like.png" @click="liked = true" />
        </div>
      </div>
      <q-card class="my-card" v-if="liked && this.$route.params.car == 'kasedan'">
        <div class="text-h5 q-mt-sm q-mb-xs">Ford Ka Sedan</div>
        <img
          src="https://www.karvi.com.br/_next/image/?url=https%3A%2F%2Fdjdnloyvqzzd3.cloudfront.net%2Fbr%2Fmodels%2Fford%2Fka-sedan%2Fdesktop%2Fthumbnail%2Fford-ka-sedan_thumbnail.jpg&w=1536&q=75"
        />

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">$$</div>
          <div class="text-caption">
            Econômico, simples e comfortável, o melhor das três combinações
          </div>
          <!--Trocar aqui-->
        </q-card-section>

        <q-list>
          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="red" name="local_gas_station" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Tipo de Combustivel:</q-item-label>
              <q-item-label caption>FLEX</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Número de Portas:</q-item-label>
              <q-item-label caption>4</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Tração Dianteira</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Transmissão Automática/Manual</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Tanque de 52L</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Ar Condicionado</q-item-label>
            </q-item-section>
          </q-item>

          <q-expansion-item
            expand-separator
            icon="mail"
            label="Detalhes do Motor"
            content-inset-level="2"
          >
            <!-- Detalhe talvez tire depois, ta ai pra testar -->
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="local_movies" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Motor</q-item-label>
                <q-item-label caption>1.5 FLEX</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="local_movies" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Potência</q-item-label>
                <q-item-label caption>110 cv</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="local_movies" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Torque</q-item-label>
                <q-item-label caption>137 Nm</q-item-label>
              </q-item-section>
            </q-item>
          </q-expansion-item>
        </q-list>
      </q-card>
    </div>
    <div
      class="q-pa-md row items-start q-gutter-md"
      v-if="this.$route.params.car == 'kahatch'"
    >
      <div v-if="!liked && this.$route.params.car == 'kahatch'">
        <div class="text-h5 q-mt-sm q-mb-xs">Ford Territory</div>
        <img
          src="https://www.karvi.com.br/_next/image/?url=https%3A%2F%2Fdjdnloyvqzzd3.cloudfront.net%2Fbr%2Fmodels%2Fford%2Fterritory%2Fdesktop%2Fthumbnail%2Fford-territory_thumbnail.jpg&w=1536&q=75"
        />
        <div class="btns">
          <img src="../assets/nope.png" @click="backToForm()" />
          <img src="../assets/like.png" @click="liked = true" />
        </div>
      </div>
      <q-card class="my-card" v-if="liked && this.$route.params.car == 'kahatch'">
        <div class="text-h5 q-mt-sm q-mb-xs">Ford Territory</div>
        <img
          src="https://www.karvi.com.br/_next/image/?url=https%3A%2F%2Fdjdnloyvqzzd3.cloudfront.net%2Fbr%2Fmodels%2Fford%2Fterritory%2Fdesktop%2Fthumbnail%2Fford-territory_thumbnail.jpg&w=1536&q=75"
        />

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">$$$$</div>
          <div class="text-caption">A junção perfeita entre espaço e potência</div>
          <!--Trocar aqui-->
        </q-card-section>

        <q-list>
          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="red" name="local_gas_station" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Tipo de Combustivel:</q-item-label>
              <q-item-label caption>Gasolina</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Número de Portas:</q-item-label>
              <q-item-label caption>4</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Freio a Disco com ABS e EBD</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Transmissão Automática</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Piloto Automático</q-item-label>
              <q-item-label caption>Adaptativo com Stop and Go</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>8 Air Bags</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Sistema de Alerta de Colisão</q-item-label>
              <q-item-label caption>e Frenagem Autônoma de Emergência (AEB)</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Ar Condicionado</q-item-label>
            </q-item-section>
          </q-item>

          <q-expansion-item
            expand-separator
            icon="mail"
            label="Detalhes do Motor"
            content-inset-level="1"
          >
            <!-- Detalhe talvez tire depois, ta ai pra testar -->
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="local_movies" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Motor</q-item-label>
                <q-item-label caption>1.5T EcoBoost GTDi</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="local_movies" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Potência</q-item-label>
                <q-item-label caption>150 cv @ 5300 rpm</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="local_movies" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Torque</q-item-label>
                <q-item-label caption>225 Nm @ 4000 rpm</q-item-label>
              </q-item-section>
            </q-item>
          </q-expansion-item>
        </q-list>
      </q-card>
    </div>
    <div
      class="q-pa-md row items-start q-gutter-md"
      v-if="this.$route.params.car == 'ranger'"
    >
      <div v-if="!liked && this.$route.params.car == 'ranger'">
        <div class="text-h5 q-mt-sm q-mb-xs">Ford Ranger Limited 3.2</div>
        <img
          src="https://www.karvi.com.br/_next/image/?url=https%3A%2F%2Fdjdnloyvqzzd3.cloudfront.net%2Fbr%2Fmodels%2Fford%2Franger%2Fdesktop%2Fthumbnail%2Fford-ranger_thumbnail.jpg&w=1536&q=75"
        />
        <div class="btns">
          <img src="../assets/nope.png" @click="backToForm()" />
          <img src="../assets/like.png" @click="liked = true" />
        </div>
      </div>
      <q-card class="my-card" v-if="liked && this.$route.params.car == 'ranger'">
        <div class="text-h5 q-mt-sm q-mb-xs">Ford Ranger Limited 3.2</div>
        <img
          src="https://www.karvi.com.br/_next/image/?url=https%3A%2F%2Fdjdnloyvqzzd3.cloudfront.net%2Fbr%2Fmodels%2Fford%2Franger%2Fdesktop%2Fthumbnail%2Fford-ranger_thumbnail.jpg&w=1536&q=75"
        />

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">$$$$$</div>
          <div class="text-caption">A picape raça forte</div>
          <!--Trocar aqui-->
        </q-card-section>

        <q-list>
          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="red" name="local_gas_station" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Tipo de Combustivel:</q-item-label>
              <q-item-label caption>Diesel</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Número de Portas:</q-item-label>
              <q-item-label caption>4</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Freio a Disco com ABS e EBD</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Transmissão Automática</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>PATS</q-item-label>
              <q-item-label caption>Sistema Ford Antifurto</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Sync Media System III</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>7 Air Bags</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Câmera de Ré</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Ar Condicionado</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Piloto Automático Adaptativo</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Sensores de Estacionamento</q-item-label>
            </q-item-section>
          </q-item>

          <q-expansion-item
            expand-separator
            icon="mail"
            label="Detalhes do Motor"
            content-inset-level="2"
          >
            <!-- Detalhe talvez tire depois, ta ai pra testar -->
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="local_movies" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Motor</q-item-label>
                <q-item-label caption>Diesel 3.2 Duratorq - TDCi</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="local_movies" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Potência</q-item-label>
                <q-item-label caption>200 cv @ 3000 rpm</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="local_movies" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Torque</q-item-label>
                <q-item-label caption>470 Nm @ 2500 rpm</q-item-label>
              </q-item-section>
            </q-item>
          </q-expansion-item>
        </q-list>
      </q-card>
    </div>
    <div
      class="q-pa-md row items-start q-gutter-md"
      v-if="this.$route.params.car == 'mustang'"
    >
      <div v-if="!liked && this.$route.params.car == 'mustang'">
        <div class="text-h5 q-mt-sm q-mb-xs">Ford Mustang</div>
        <img
          src="https://www.ford.com.br/content/ford/br/pt_br/home/performance/mustang/jcr:content/par/splitter_1765692640/splitter1/image/image.imgs.480.high.jpg/1648739037059.jpg"
        />
        <div class="btns">
          <img src="../assets/nope.png" @click="backToForm()" />
          <img src="../assets/like.png" @click="liked = true" />
        </div>
      </div>
      <q-card class="my-card" v-if="liked && this.$route.params.car == 'mustang'">
        <div class="text-h5 q-mt-sm q-mb-xs">Ford Mustang Mach. 1</div>
        <img
          src="https://www.ford.com.br/content/ford/br/pt_br/home/performance/mustang/jcr:content/par/splitter_1765692640/splitter1/image/image.imgs.480.high.jpg/1648739037059.jpg"
        />

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">$$$$$</div>
          <div class="text-caption">
            Para os amantes de estilo e velocidade, o Mustang é o carro ideal
          </div>
          <!--Trocar aqui-->
        </q-card-section>

        <q-list>
          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="red" name="local_gas_station" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Tipo de Combustivel:</q-item-label>
              <q-item-label caption>Gasolina</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Número de Portas:</q-item-label>
              <q-item-label caption>2</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Freio a Disco com ABS e EBD</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Transmissão Automática</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Câmera Traseira em LED</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Alerta de colisão</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Piloto Automático</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="amber" name="local_movies" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Bancos Aquecidos e Refrigerados</q-item-label>
            </q-item-section>
          </q-item>

          <q-expansion-item
            expand-separator
            icon="mail"
            label="Detalhes do Motor"
            content-inset-level="1"
          >
            <!-- Detalhe talvez tire depois, ta ai pra testar -->
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="local_movies" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Motor</q-item-label>
                <q-item-label caption>5.0L 8V</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="local_movies" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Potência</q-item-label>
                <q-item-label caption>438cv @ 7250rpm</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="local_movies" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Torque</q-item-label>
                <q-item-label caption>556 Nm @ 4900rpm</q-item-label>
              </q-item-section>
            </q-item>
          </q-expansion-item>
        </q-list>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      liked: false,
      nope: false,
    };
  },
  methods: {
    backToForm() {
      this.$router.push({ name: "Form" });
    },
  },
  mounted: function () {},
};
</script>

<style>
.my-card {
  width: 200%;
  max-width: 600px;
}

.btns {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 30px;
  margin: auto;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 300px;
  max-width: 355px;
}

.btns img {
  margin-right: 12px;
  box-shadow: 0 4px 9px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

.btns img:nth-child(2n + 1) {
  width: 53px;
}

.btns img:nth-child(2n) {
  width: 65px;
}

.btns img:nth-last-child(1) {
  margin-right: 0;
}
</style>
