namespace SnusBolaget.API.MockData
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public string NicotineAmount { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }
        public double StarRating { get; set; }
        public string ImageUrl { get; set; }
        public string NicotineLevel { get; set; }
        public string Taste { get; set; }
        public string ContentWeight { get; set; }
        public string ContentWeightUnit { get; set; }
        public string Producer { get; set; }
    }

    public class MockedProducts
    {
        public List<Product> Products =
            new()
            {
                new()
                {
                    Id = 1,
                    Name = "Ettan",
                    Type = "Portion",
                    NicotineAmount = "8,5 mg/g",
                    Description =
                        "Ettan Portion är ett portionssnus med en traditionell tobakssmak. Fyllig, robust och lätt rökig. Ettan är tradition.",
                    Price = 45.9,
                    StarRating = 4.5,
                    ImageUrl =
                        "https=//media.snusbolaget.se/snusbolaget/images/swm-875-2022-01-18-101200567/555/555/2/ettan-portionssnus.png",
                    NicotineLevel = "8.5mg/g",
                    Taste = "Traditionell",
                    ContentWeight = "24",
                    ContentWeightUnit = "g",
                    Producer = "Swedish Match",
                },
                new()
                {
                    Id = 2,
                    Name = "Grov",
                    Type = "Portion",
                    NicotineAmount = "8,5 mg/g",
                    Description =
                        "Precis som namnet antyder är Grov Portion ett grövre snus. Det är det självklara valet för den som önskar lite mer känsla under läppen. Med en robust och avrundad, stark tobakssmak. Du kan känna toner av trä och läder, men smaken bär även en viss nötighet och sötma i en balanserad kombination.        Prillorna är uppdaterade med ett porösare papper för en närmare tobaksupplevelse.​        Grovsnus har en lång historia.Snuset blev snabbt populärt på 1800 - talet och tillverkas än idag efter ett recept som är mer än 100 år gammalt.        Finns både som lössnus och portion.Märket blev först tillverkat i Norrland,        innan Swedish Match tog över produktionen som nu ligger i södra Sverige.        ",
                    Price = 48.5,
                    StarRating = 5,
                    ImageUrl =
                        "https=//media.snusbolaget.se/snusbolaget/images/swm-855-2020-07-27-093759394/555/555/0/grov-portionssnus.png",
                    NicotineLevel = "8.5mg/g",
                    Taste = "Traditionell",
                    ContentWeight = "24",
                    ContentWeightUnit = "g",
                    Producer = "Swedish Match",
                },
                new()
                {
                    Id = 3,
                    Name = "General",
                    Type = "Portion",
                    NicotineAmount = "8,5 mg/g",
                    Description =
                        "General, tidigare kallat Generalsnus, framställs av Swedish Match. Det är en av Sveriges genom tiderna största titlar med långa och anor. Generals snus görs på en blandning av över 20 olika tobakssorter som kompletteras med bergamottolja. Smakerna i sortimentet innehåller även peppar och en antydan av citrus. General finns i alla möjliga former; General Lös, General Portion, General Mini, General White, General XR och även som stark snus.",
                    Price = 50,
                    StarRating = 3.2,
                    ImageUrl =
                        "https=//media.snusbolaget.se/snusbolaget/images/swm-880-2020-10-12-103510322/555/555/0/general-portionssnus.png",
                    NicotineLevel = "8.5mg/g",
                    Taste = "Traditionell",
                    ContentWeight = "24",
                    ContentWeightUnit = "g",
                    Producer = "Swedish Match"
                },
                new()
                {
                    Id = 4,
                    Name = "Göteborgs Rapé",
                    Type = "Portion",
                    NicotineAmount = "8,5 mg/g",
                    Description =
                        "Snus från Göteborgs Rapé har en lång historia, snuset har sålts i Sverige ända sedan 1919. Göteborgs Rapé-snuset har en speciell karaktär med en mild tobakssmak och viss sötma. Det har även inslag av färska örter och enbär. Göteborgs Rapé tillverkas av Swedish Match och finns tillgängligt i en mängd olika varianter.",
                    Price = 50,
                    StarRating = 3.5,
                    ImageUrl =
                        "https=//media.snusbolaget.se/snusbolaget/images/swm-874-2018-05-17-134527613/555/555/0/goteborgs-rape-white-portionssnus.png",
                    NicotineLevel = "8.5mg/g",
                    Taste = "Traditionell",
                    ContentWeight = "24",
                    ContentWeightUnit = "g",
                    Producer = "Swedish Match"
                },
                new()
                {
                    Id = 5,
                    Name = "Röda Lacket",
                    Type = "Portion",
                    NicotineAmount = "8,5 mg/g",
                    Description = "50% snus, 45% jenkasmak 5% barrsmak",
                    Price = 67.49,
                    StarRating = 3.5,
                    ImageUrl =
                        "https=//media.snusbolaget.se/snusbolaget/images/swm-808-2017-04-11-114503959/555/555/2/roda-lacket-lossnus.png",
                    NicotineLevel = "8.5mg/g",
                    Taste = "Traditionell",
                    ContentWeight = "24",
                    ContentWeightUnit = "g",
                    Producer = "Swedish Match"
                },
            };
    }
}
