<template>
    Used components, v-for, text interpolation, v-bind:src, v-bind:href, data property.
    <table>
        <tbody>
            <tr>
                <th>Id</th>
                <th>Image</th>
                <th>Name</th>
                <th>Description</th>
                <th>Details</th>
            </tr>
            <tr v-for="x in heroes">
                <td>
                    {{ x.id }}
                </td>
                <td>
                    <img v-bind:src="x.picture" alt="Avatar" style="height:150px;">
                </td>
                <td>
                    {{ x.name }}
                </td>
                <td>
                    {{ x.desc }}
                </td>
                <td>
                    <a v-bind:href="x.detailsUrl" target="_blank">More Info</a>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    data() {
        return {
            heroes: [
                {
                    id: 1,
                    name: 'Hanabi',
                    desc: 'A ninja who holds the coveted Scarlet techniques.',
                    picture: "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_85d213390613bbc09220cf1d9f64c5c0.png",
                    detailsUrl: "https://www.mobilelegends.com/hero/detail?channelid=2678796&heroid=60"
                },
                {
                    id: 2,
                    name: 'Lesley',
                    desc: "Harley's guardian and a talented sniper.",
                    picture: "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_f4f42410c90f84e4d46b129d5e8887e8.png",
                    detailsUrl: "https://www.mobilelegends.com/hero/detail?channelid=2678789&heroid=53"
                },
                {
                    id: 3,
                    name: 'Layla',
                    desc: 'A skilled marksman who carries a Malefic Gun.',
                    picture: "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_6efe9abc2047f59d45fa1c88fb1261b7.png",
                    detailsUrl: "https://www.mobilelegends.com/hero/detail?channelid=2678754&heroid=18"
                },
                {
                    id: 4,
                    name: 'Diggie',
                    desc: 'A little owl with a penchant for timepieces.',
                    picture: "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_7a7a688cf1562a124f7183b2c2957608.png",
                    detailsUrl: "https://www.mobilelegends.com/hero/detail?channelid=2678784&heroid=48"
                },
                {
                    id: 5,
                    name: 'Vexana',
                    desc: 'The young duchess that guards the Necrokeep.',
                    picture: "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_39c9058219c59535e9ed07645c8d9dd3.png",
                    detailsUrl: "https://www.mobilelegends.com/hero/detail?channelid=2678774&heroid=38"
                }
            ]
        };
    }
}
</script>

<style scoped>
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    background-color: black;
    color: white;
}

td,
th {
    border: 0px;
    text-align: left;
    padding: 8px;
}

tr:nth-child(even) {
    background-color: #3D4449;
}
</style>