<script lang="ts">
  import { goto } from "$app/navigation";

  let letnik: number | undefined = undefined;
  let predmet: number;
  let profesor: number;

  let profesorji = [
    { id: 1, name: "Alenka Mozer" },
    { id: 2, name: "Maja Gerden" },
    { id: 4, name: "Anže Perne" },
    { id: 5, name: "Blanka Klobučar" },
    { id: 7, name: "Mateja Legan Crnoja" },
    { id: 8, name: "Timothy Gallagher" },
    { id: 9, name: "Sonja Artač" },
    { id: 10, name: "Barbara Černe Gresl" },
    { id: 11, name: "Helena Potočnik Vičar" },
    { id: 12, name: "Eva Šajn" },
    { id: 13, name: "Edin Saračević" },
    { id: 14, name: "Vida Kariž Merhar" },
    { id: 15, name: "Timotej Maroševič" },
    { id: 16, name: "Barbara Hudovernik" },
    { id: 18, name: "Cedric Klein" },
    { id: 19, name: "Jana Jerman" },
    { id: 20, name: "Marija Boh" },
    { id: 21, name: "Tjaša Koštomaj (geografija)" },
    { id: 22, name: "Marija Mihevc" },
    { id: 23, name: "Klemen Bajec" },
    { id: 24, name: "Alenka Krapež" },
    { id: 25, name: "Marina Trost" },
    { id: 26, name: "Marta Lukanec" },
    { id: 27, name: "Andrej Smrdu" },
    { id: 28, name: "Alenka Pikl Osole" },
    { id: 29, name: "Hanka Lebič" },
    { id: 30, name: "Nives Mihelič Erbežnik" },
    { id: 31, name: "Vanja Špelko" },
    { id: 32, name: "Nataša Šuligoj" },
    { id: 33, name: "Romana Vrtačič" },
    { id: 34, name: "Tatiana Elisabet Sušnik" },
    { id: 35, name: "Šarlota Flisek" },
    { id: 36, name: "Mojca Strmčnik Žemva" },
    { id: 37, name: "Majda Šajn Stjepić" },
    { id: 38, name: "Marjetka Krapež" },
    { id: 39, name: "Alenka Ocvirk Zelič" },
    { id: 40, name: "Jana Ozimek" },
    { id: 41, name: "Mirjam Šemrov" },
    { id: 42, name: "Tanja Šket" },
    { id: 43, name: "Mojca Kosi (slovenščina)" },
    { id: 44, name: "Maša Novakovič (angleščina)" },
    { id: 45, name: "Julijana Taseva (italijanščina)" },
    { id: 46, name: "Lucija Zala Bezlaj" },
    { id: 47, name: "Matjaž Poljanšek" },
    { id: 48, name: "Miriam Jereb Batagelj" },
    { id: 49, name: "Laura Repovš" },
    { id: 50, name: "Mojca Glaser Tehovnik" },
    { id: 51, name: "Tadeja Rudolf Vahtar" },
    { id: 52, name: "Tadej Čopar" },
    { id: 53, name: "Tjaša Koštomaj (zgodovina)" },
    { id: 54, name: "Darinka Kadunc Magajna" },
    { id: 55, name: "Jure Ausec" },
    { id: 56, name: "Andrej Koritnik" },
  ];
</script>

<form
  on:submit={(e) => {
    e.preventDefault();

    goto(`/prikazi?letnik=${letnik}&predmet=${predmet}&profesor=${profesor}`);
  }}
  class="w-full"
>
  <div class="w-full">
    <label for="HeadlineAct" class="block text-sm font-medium text-gray-900">
      Letnik
    </label>

    <select
      bind:value={letnik}
      required
      class="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
    >
      <option value selected>Izberi Letnik</option>
      <option value="1">1. Letnik</option>
      <option value="2">2. Letnik</option>
      <option value="3">3. Letnik</option>
      <option value="4">4. Letnik</option>
    </select>
  </div>

  <div class="w-full my-4">
    <label for="HeadlineAct" class="block text-sm font-medium text-gray-900">
      Predmet
    </label>

    <select
      bind:value={predmet}
      required
      class="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
    >
      <option value selected>Izberi Predmet</option>
      <option value="1">Angleščina</option>
      <option value="2">Biologija</option>
      <option value="3">Filozofija</option>
      <option value="4">Fizika</option>
      <option value="5">Francoščina</option>
      <option value="6">Geografija</option>
      <option value="7">Glasba</option>
      <option value="8">Informatika</option>
      <option value="9">Italijanščina</option>
      <option value="10">Kemija</option>
      <option value="11">Likovna umetnost</option>
      <option value="12">Matematika</option>
      <option value="13">Nemščina</option>
      <option value="14">Psihologija</option>
      <option value="15">Slovenščina</option>
      <option value="16">Sociologija</option>
      <option value="17">Španščina</option>
      <option value="18">Zgodovina</option>
    </select>
  </div>

  <div class="w-full">
    <label for="HeadlineAct" class="block text-sm font-medium text-gray-900">
      Profesor
    </label>

    <select
      bind:value={profesor}
      required
      class="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
    >
      {#each profesorji as profesor}
        <option value={profesor.id}>{profesor.name}</option>
      {/each}
    </select>
  </div>
  <button
    class="group mt-4 relative w-full items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
    type="submit"
  >
    <span class="text-sm font-medium"> Download </span>
  </button>
</form>
