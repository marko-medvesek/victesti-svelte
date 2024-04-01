<script lang="ts">
  import { goto } from "$app/navigation";

  let letnik: number | undefined = undefined;
  let predmet: number;
  let profesor: number;

  let profesorjiFiltered: any[] = [];

  let profesorji = [
    { id: 1, name: "Alenka", surname: "Mozer", subject: 10 },
    { id: 2, name: "Maja", surname: "Gerden", subject: 1 },
    { id: 4, name: "Anže", surname: "Perne", subject: 1 },
    { id: 5, name: "Blanka", surname: "Klobučar", subject: 1 },
    { id: 7, name: "Mateja", surname: "Legan Crnoja", subject: 1 },
    { id: 8, name: "Timothy", surname: "Gallagher", subject: 1 },
    { id: 9, name: "Sonja", surname: "Artač", subject: 2 },
    { id: 10, name: "Barbara", surname: "Černe Gresl", subject: 2 },
    { id: 11, name: "Helena", surname: "Potočnik Vičar", subject: 2 },
    { id: 12, name: "Eva", surname: "Šajn", subject: 2 },
    { id: 13, name: "Edin", surname: "Saračević", subject: 3 },
    { id: 14, name: "Vida", surname: "Kariž Merhar", subject: 4 },
    { id: 15, name: "Timotej", surname: "Maroševič", subject: 4 },
    { id: 16, name: "Barbara", surname: "Hudovernik", subject: 4 },
    { id: 18, name: "Cedric", surname: "Klein", subject: 5 },
    { id: 19, name: "Jana", surname: "Jerman", subject: 6 },
    { id: 20, name: "Marija", surname: "Boh", subject: 6 },
    { id: 22, name: "Marija", surname: "Mihevc", subject: 7 },
    { id: 23, name: "Klemen", surname: "Bajec", subject: 8 },
    { id: 24, name: "Alenka", surname: "Krapež", subject: 8 },
    { id: 25, name: "Marina", surname: "Trost", subject: 8 },
    { id: 26, name: "Marta", surname: "Lukanec", subject: 10 },
    { id: 27, name: "Andrej", surname: "Smrdu", subject: 10 },
    { id: 28, name: "Alenka", surname: "Pikl Osole", subject: 11 },
    { id: 29, name: "Hanka", surname: "Lebič", subject: 12 },
    { id: 30, name: "Nives", surname: "Mihelič Erbežnik", subject: 12 },
    { id: 31, name: "Vanja", surname: "Špelko", subject: 12 },
    { id: 32, name: "Nataša", surname: "Šuligoj", subject: 12 },
    { id: 33, name: "Romana", surname: "Vrtačič", subject: 12 },
    { id: 34, name: "Tatiana Elisabet", surname: "Sušnik", subject: 12 },
    { id: 35, name: "Šarlota", surname: "Flisek", subject: 13 },
    { id: 36, name: "Mojca", surname: "Strmčnik Žemva", subject: 13 },
    { id: 37, name: "Majda", surname: "Šajn Stjepić", subject: 14 },
    { id: 38, name: "Marjetka", surname: "Krapež", subject: 15 },
    { id: 39, name: "Alenka", surname: "Ocvirk Zelič", subject: 15 },
    { id: 40, name: "Jana", surname: "Ozimek", subject: 15 },
    { id: 41, name: "Mirjam", surname: "Šemrov", subject: 15 },
    { id: 42, name: "Tanja", surname: "Šket", subject: 15 },
    { id: 43, name: "Mojca", surname: "Kosi (slovenščina)", subject: 15 },
    { id: 6, name: "Mojca", surname: "Kosi (angleščina)", subject: 1 },
    { id: 3, name: "Maša", surname: "Novakovič (nemščina)", subject: 13 },
    { id: 44, name: "Maša", surname: "Novakovič (angleščina)", subject: 1 },
    { id: 17, name: "Julijana", surname: "Taseva (francoščina)", subject: 5 },
    { id: 45, name: "Julijana", surname: "Taseva (italijanščina)", subject: 9 },
    { id: 46, name: "Lucija Zala", surname: "Bezlaj", subject: 16 },
    { id: 47, name: "Matjaž", surname: "Poljanšek", subject: 16 },
    { id: 48, name: "Miriam", surname: "Jereb Batagelj", subject: 17 },
    { id: 49, name: "Laura", surname: "Repovš", subject: 17 },
    { id: 50, name: "Mojca", surname: "Glaser Tehovnik", subject: 18 },
    { id: 51, name: "Tadeja", surname: "Rudolf Vahtar", subject: 18 },
    { id: 52, name: "Tadej", surname: "Čopar", subject: 18 },
    { id: 53, name: "Tjaša", surname: "Koštomaj (zgodovina)", subject: 18 },
    { id: 21, name: "Tjaša", surname: "Koštomaj (geografija)", subject: 6 },
    { id: 54, name: "Darinka", surname: "Kadunc Magajna", subject: 18 },
    { id: 55, name: "Jure", surname: "Ausec", subject: 4 },
    { id: 56, name: "Andrej", surname: "Koritnik", subject: 15 },
  ];

  function filtrirajProfesorje() {
    if (predmet === undefined) {
      return profesorji;
    }

    return profesorji.filter(
      (profesor: any) => parseInt(profesor.subject) === parseInt(predmet)
    );
  }
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
      on:change={() => {
        profesorjiFiltered = filtrirajProfesorje();
      }}
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
      disabled={profesorjiFiltered.length === 0}
      required
      class="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
    >
      <option value>Izberi Profesorja</option>
      {#each profesorjiFiltered as profesor}
        <option value={profesor.id}>{profesor.name} {profesor.surname}</option>
      {/each}
    </select>
  </div>
  <button
    class="mt-4 relative w-full items-center overflow-hidden rounded-xl bg-black px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
    type="submit"
  >
    <span class="text-sm font-medium"> Prikaži </span>
  </button>
</form>
