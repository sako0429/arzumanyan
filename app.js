// Sample family tree data
const treeData = {
    name: " 1",
    children: [
        {
            name: " 11",
            children: [
                { name: " 111",
                    children: [
                        { name: " 1111" },
                        { name: " 1112" },
                        { name: " 1113" },
                        { name: " 1114" },
                        { name: " 1115",
                            children: [
                                { name: " 11151" },
                                { name: " 11152",
                                    children: [
                                        { name: " 111521",
                                            children: [
                                                { name: " 1115211" },
                                                { name: " 1115212",
                                                    children: [
                                                        { name: " 11152121" },
                                                        { name: " 11152122" },
                                                    ] },
                                                { name: " 1115213" },
                                            ] },
                                        { name: " 111522",
                                            children: [
                                                { name: " 1115221",
                                                    children: [
                                                        { name: " 11152211" },
                                                        { name: " 11152212" },
                                                    ] },
                                                { name: " 1115222",
                                                    children: [
                                                        { name: " 11152221" },
                                                        { name: " 11152222" },
                                                        { name: " 11152223" },
                                                    ] },
                                                { name: " 1115223",
                                                    children: [
                                                        { name: " 11152231" },
                                                    ] },
                                            ] },
                                        { name: " 111523",
                                            children: [
                                                { name: " 1115231" },
                                                { name: " 1115232",
                                                    children: [
                                                        { name: " 11152321" },
                                                        { name: " 11152322" },
                                                        { name: " 11152323" },
                                                    ] },
                                                { name: " 1115233",
                                                    children: [
                                                        { name: " 11152331" },
                                                        { name: " 11152332" },
                                                    ] },
                                            ] },
                                        { name: " 111524" },
                                        { name: " 111525" },
                                        { name: " 111526" },
                                        { name: " 111527",
                                            children: [
                                                { name: " 1115271" },
                                                { name: " 1115272",
                                                    children: [
                                                        { name: " 11152721" },
                                                        { name: " 11152722" },
                                                    ] },
                                                { name: " 1115273" },
                                                { name: " 1115274" },
                                                { name: " 1115275",
                                                    children: [
                                                        { name: " 11152751" },
                                                        { name: " 11152752" },
                                                    ] },
                                            ] },
                                        { name: " 111528" },
                                        { name: " 111529" },
                                    ] },
                                { name: " 11153" },
                                { name: " 11154",
                                    children: [
                                        { name: " 111541",
                                            children: [
                                                { name: " 1115411",
                                                    children: [
                                                        { name: " 11154111" },
                                                        { name: " 11154112" },
                                                        { name: " 11154113" },
                                                    ] },
                                                { name: " 1115412",
                                                    children: [
                                                        { name: " 11154121" },
                                                        { name: " 11154122" },
                                                    ] },
                                                { name: " 1115413",
                                                    children: [
                                                        { name: " 11154131" },
                                                        { name: " 11154132" },
                                                    ] },
                                            ] },
                                    ] },
                                { name: " 11155",
                                    children: [
                                        { name: " 111551" },
                                        { name: " 111552" },
                                    ] },
                                { name: " 11156" },
                                { name: " 11157",
                                    children: [
                                        { name: " 111571" },
                                        { name: " 111572",
                                            children: [
                                                { name: " 1115721",
                                                    children: [
                                                        { name: " 11157211",
                                                            children: [
                                                                { name: " 111572111" },
                                                                { name: " 111572112" },
                                                            ] },
                                                        { name: " 11157212" },
                                                    ] },
                                                { name: " 1115722" },
                                                { name: " 1115723" },
                                            ] },
                                        { name: " 111573",
                                            children: [
                                                { name: " 1115731" },
                                                { name: " 1115732" },
                                                { name: " 1115733" },
                                            ] },
                                        { name: " 111574",
                                            children: [
                                                { name: " 1115741" },
                                                { name: " 1115742",
                                                    children: [
                                                        { name: " 11157421" },
                                                    ] },
                                                { name: " 1115743" },
                                            ] },
                                    ] },
                                { name: " 11158" },
                            ] },
                    ] },
                { name: " 112",
                    children: [
                        { name: " 1121",
                            children: [
                                { name: " 11211" },
                                { name: " 11212" },
                                { name: " 11213",
                                    children: [
                                        { name: " 112131" },
                                        { name: " 112132",
                                            children: [
                                                { name: " 1121321",
                                                    children: [
                                                        { name: " 11213211" },
                                                        { name: " 11213212" },
                                                    ] },
                                                { name: " 1121322" },
                                            ] },
                                        { name: " 112133" },
                                        { name: " 112134" },
                                        { name: " 112135",
                                            children: [
                                                { name: " 1121351",
                                                    children: [
                                                        { name: " 11213511" },
                                                        { name: " 11213512" },
                                                        { name: " 11213513" },
                                                        { name: " 11213514" },
                                                        { name: " 11213515" },
                                                    ] },
                                                { name: " 1121352" },
                                                { name: " 1121353" },
                                            ] },
                                        { name: " 112136",
                                            children: [
                                                { name: " 1121361" },
                                                { name: " 1121362" },
                                                { name: " 1121363",
                                                    children: [
                                                        { name: " 11213631" },
                                                        { name: " 11213632" },
                                                        { name: " 11213633" },
                                                    ] },
                                            ] },
                                        { name: " 112137",
                                            children: [
                                                { name: " 1121371",
                                                    children: [
                                                        { name: " 11213711" },
                                                        { name: " 11213712" },
                                                    ] },
                                                { name: " 1121372" },
                                            ] },
                                    ] },
                                { name: " 11214" },
                                { name: " 11215",
                                    children: [
                                        { name: " 112151",
                                            children: [
                                                { name: " 1121511",
                                                    children: [
                                                        { name: " 11215111" },
                                                        { name: " 11215112" },
                                                    ] },
                                                { name: " 1121512",
                                                    children: [
                                                        { name: " 11215121" },
                                                        { name: " 11215122" },
                                                    ] },
                                            ] },
                                        { name: " 112152",
                                            children: [
                                                { name: " 1121521" },
                                                { name: " 1121522" },
                                                { name: " 1121523" },
                                            ] },
                                        { name: " 112153" },
                                        { name: " 112154",
                                            children: [
                                                { name: " 1121541" },
                                                { name: " 1121542" },
                                            ] },
                                        { name: " 112155",
                                            children: [
                                                { name: " 1121551" },
                                                { name: " 1121552" },
                                                { name: " 1121553" },
                                                { name: " 1121554" },
                                            ] },
                                    ] },
                                { name: " 11216" }
                            ] },
                        { name: " 1122",
                            children: [
                                { name: " 11221" },
                            ] },
                        { name: " 1123" },
                        { name: " 1124",
                            children: [
                                { name: " 11241",
                                    children: [
                                        { name: " 112411" },
                                        { name: " 112412",
                                            children: [
                                                { name: " 1124121" },
                                                { name: " 1124122" },
                                            ] },
                                        { name: " 112413",
                                            children: [
                                                { name: " 1124131",
                                                    children: [
                                                        { name: " 11241311" },
                                                    ] },
                                                { name: " 1124132" },
                                                { name: " 1124133" },
                                                { name: " 1124134" },
                                            ] },
                                        { name: " 112414",
                                            children: [
                                                { name: " 1124141" },
                                                { name: " 1124142" },
                                            ] },
                                    ] },
                                { name: " 11242",
                                    children: [
                                        { name: " 112421" },
                                        { name: " 112422" },
                                        { name: " 112423",
                                            children: [
                                                { name: " 1124231" },
                                                { name: " 1124232" },
                                            ] },
                                    ] },
                                { name: " 11243",
                                    children: [
                                        { name: " 112431" },
                                        { name: " 112432" },
                                        { name: " 112433",
                                            children: [
                                                { name: " 1124331" },
                                                { name: " 1124332" },
                                                { name: " 1124333" },
                                                { name: " 1124334" },
                                            ] },
                                    ] },
                                { name: " 11244" },
                                { name: " 11245" },
                            ] },
                        { name: " 1125",
                            children: [
                                { name: " 11251" },
                                { name: " 11252",
                                    children: [
                                        { name: " 112521" },
                                        { name: " 112522" },
                                        { name: " 112523",
                                            children: [
                                                { name: " 1125231" },
                                                { name: " 1125232" },
                                                { name: " 1125233" },
                                            ] },
                                    ] },
                                { name: " 11253" },
                                { name: " 11254" },
                                { name: " 11255" },
                                { name: " 11256",
                                    children: [
                                        { name: " 112561",
                                            children: [
                                                { name: " 1125611" },
                                            ] },
                                        { name: " 112562",
                                            children: [
                                                { name: " 1125621" },
                                            ] },
                                        { name: " 112563" },
                                    ] }
                            ] },
                        { name: " 1126",
                            children: [
                                { name: " 11261" },
                                { name: " 11262",
                                    children: [
                                        { name: " 112621",
                                            children: [
                                                { name: " 1126211" },
                                                { name: " 1126212" },
                                                { name: " 1126213" },
                                            ] },
                                        { name: " 112622" },
                                        { name: " 112623" },
                                    ] },
                                { name: " 11263",
                                    children: [
                                        { name: " 112631",
                                            children: [
                                                { name: " 1126311" },
                                                { name: " 1126312" },
                                            ] },
                                        { name: " 112632" },
                                    ] },
                                { name: " 11264",
                                    children: [
                                        { name: " 112641",
                                            children: [
                                                { name: " 1126411" },
                                                { name: " 1126412" },
                                            ] },
                                        { name: " 112642" },
                                    ] },
                                { name: " 11265",
                                    children: [
                                        { name: " 112651",
                                            children: [
                                                { name: " 1126511" },
                                            ] },
                                        { name: " 112652" },
                                        { name: " 112653" },
                                    ] },
                            ] }
                    ] },
                { name: " 113",
                    children: [
                        { name: " 1131" },
                        { name: " 1132",
                            children: [
                                { name: " 11321",
                                    children: [
                                        { name: " 113211" },
                                        { name: " 113212" },
                                        { name: " 113213" },
                                        { name: " 113214",
                                            children: [
                                                { name: " 1132141" },
                                            ] },
                                    ] },
                                { name: " 11322",
                                    children: [
                                        { name: " 113221" },
                                        { name: " 113222",
                                            children: [
                                                { name: " 1132221" },
                                                { name: " 1132222" },
                                            ] },
                                    ] },
                                { name: " 11323" },
                                { name: " 11324" },
                                { name: " 11325" },
                                { name: " 11326" },
                                { name: " 11327" },
                                { name: " 11328" },
                                { name: " 11329" },
                                { name: " 11320",
                                    children: [
                                        { name: " 113201" },
                                        { name: " 113202" },
                                        { name: " 113203" },
                                    ] },
                            ] },
                        { name: " 1133",
                            children: [
                                { name: " 11331" },
                                { name: " 11332",
                                    children: [
                                        { name: " 11331" },
                                        { name: " 11332",
                                            children: [
                                                { name: " 113321" },
                                                { name: " 113322" },
                                            ] },
                                        { name: " 11333" },
                                    ] },
                                { name: " 11333" },
                                { name: " 11334" },
                                { name: " 11335",
                                    children: [
                                        { name: " 113351",
                                            children: [
                                                { name: " 1133511" },
                                                { name: " 1133512" },
                                            ] },
                                        { name: " 113352" },
                                        { name: " 113353" },
                                    ] },
                                { name: " 11336",
                                    children: [
                                        { name: " 113361",
                                            children: [
                                                { name: " 1133611" },
                                                { name: " 1133612" },
                                            ] },
                                        { name: " 113362",
                                            children: [
                                                { name: " 1133621" },
                                            ] },
                                        { name: " 113363",
                                            children: [
                                                { name: " 1133631" },
                                            ] },
                                    ] },
                            ] },
                        { name: " 1134",
                            children: [
                                { name: " 11341" },
                                { name: " 11342",
                                    children: [
                                        { name: " 113421" },
                                        { name: " 113422",
                                            children: [
                                                { name: " 1134221" },
                                                { name: " 1134222" },
                                            ] },
                                        { name: " 113423",
                                            children: [
                                                { name: " 1134231" },
                                                { name: " 1134232" },
                                                { name: " 1134233" },
                                            ] },
                                    ] },
                                { name: " 11343",
                                    children: [
                                        { name: " 113431" },
                                        { name: " 113432" },
                                        { name: " 113433",
                                            children: [
                                                { name: " 1134331" },
                                                { name: " 1134332" },
                                            ] },
                                        { name: " 113434" },
                                    ] },
                                { name: " 11344" },
                                { name: " 11345" },
                                { name: " 11346",
                                    children: [
                                        { name: " 113461" },
                                        { name: " 113462",
                                            children: [
                                                { name: " 1134621",
                                                    children: [
                                                        { name: " 11346211" },
                                                    ] },
                                            ] },
                                        { name: " 113463" },
                                    ] },
                            ] },
                        { name: " 1135",
                            children: [
                                { name: " 11351" },
                            ] },
                    ] }
            ]
        },
        { name: " 12" },
        {
            name: " 13",
            children: [
                { name: " 131",
                    children: [
                        { name: " 1311",
                            children: [
                                { name: " 13111" },
                                { name: " 13112" },
                                { name: " 13113" },
                                { name: " 13114" },
                                { name: " 13115",
                                    children: [
                                        { name: " 131151",
                                            children: [
                                                { name: " 1311511" },
                                                { name: " 1311512" },
                                                { name: " 1311513" },
                                            ] },
                                        { name: " 131152",
                                            children: [
                                                { name: " 1311521" },
                                                { name: " 1311522" },
                                            ] },
                                        { name: " 131153",
                                            children: [
                                                { name: " 1311531" },
                                                { name: " 1311532" },
                                                { name: " 1311533",
                                                    children: [
                                                        { name: " 13115331" },
                                                        { name: " 13115332" },
                                                    ] },
                                                { name: " 1311534" },
                                            ] },
                                    ] },
                            ] },
                        { name: " 1312" },
                        { name: " 1313",
                            children: [
                                { name: " 13131" },
                                { name: " 13132",
                                    children: [
                                        { name: " 131321" },
                                        { name: " 131322" },
                                        { name: " 131323" },
                                        { name: " 131324" },
                                        { name: " 131325",
                                            children: [
                                                { name: " 1313251",
                                                    children: [
                                                        { name: " 13132511",
                                                            children: [
                                                                { name: " 131325111" },
                                                            ] },
                                                        { name: " 13132512" },
                                                    ] },
                                                { name: " 1313252" },
                                                { name: " 1313253" },
                                            ] },
                                    ] },
                                { name: " 13133" },
                                { name: " 13134" },
                                { name: " 13135",
                                    children: [
                                        { name: " 131351" },
                                        { name: " 131352" },
                                        { name: " 131353" },
                                        { name: " 131354" },
                                        { name: " 131355" },
                                        { name: " 131356" },
                                        { name: " 131357",
                                            children: [
                                                { name: " 1313571" },
                                                { name: " 1313572" },
                                                { name: " 1313573" },
                                            ] },
                                        { name: " 131358" },
                                        { name: " 131359" },
                                        { name: " 131350",
                                            children: [
                                                { name: " 1313501" },
                                                { name: " 1313502" },
                                                { name: " 1313503" },
                                            ] },
                                    ] },
                                { name: " 13136",
                                    children: [
                                        { name: " 131361" },
                                        { name: " 131362" },
                                        { name: " 131363",
                                            children: [
                                                { name: " 1313631",
                                                    children: [
                                                        { name: " 13136311" },
                                                        { name: " 13136312" },
                                                    ] },
                                                { name: " 1313632" },
                                            ] },
                                        { name: " 131364" },
                                        { name: " 131365",
                                            children: [
                                                { name: " 1313651",
                                                    children: [
                                                        { name: " 13136511" },
                                                        { name: " 13136512" },
                                                    ] },
                                                { name: " 1313652",
                                                    children: [
                                                        { name: " 13136521",
                                                            children: [
                                                                { name: " 131365211" },
                                                                { name: " 131365212" },
                                                            ] },
                                                        { name: " 13136522",
                                                            children: [
                                                                { name: " 131365221" },
                                                                { name: " 131365222" },
                                                            ] },
                                                    ] },
                                            ] },
                                    ] },
                                { name: " 13137" },
                                { name: " 13138" },
                                { name: " 13139",
                                    children: [
                                        { name: " 131391" },
                                        { name: " 131392" },
                                        { name: " 131393",
                                            children: [
                                                { name: " 1313931" },
                                                { name: " 1313932" },
                                            ] },
                                        { name: " 131394" },
                                    ] },
                                { name: " 13130",
                                    children: [
                                        { name: " 131301",
                                            children: [
                                                { name: " 1313011" },
                                                { name: " 1313012" },
                                                { name: " 1313013" },
                                            ] },
                                        { name: " 131302" },
                                        { name: " 131303" },
                                        { name: " 131304",
                                            children: [
                                                { name: " 1313041" },
                                                { name: " 1313042" },
                                                { name: " 1313043" },
                                            ] },
                                    ] },
                            ] }
                    ] },
                { name: " 132",
                    children: [
                        { name: " 1321" },
                        { name: " 1322" },
                        { name: " 1323" },
                        { name: " 1324" },
                        { name: " 1325",
                            children: [
                                { name: " 13251" },
                                { name: " 13252",
                                    children: [
                                        { name: " 132521",
                                            children: [
                                                { name: " 1325211" },
                                                { name: " 1325212" },
                                            ] },
                                        { name: " 132522" },
                                    ] },
                                { name: " 13253" },
                                { name: " 13254",
                                    children: [
                                        { name: " 132541" },
                                        { name: " 132542",
                                            children: [
                                                { name: " 1325421" },
                                                { name: " 1325422" },
                                            ] },
                                        { name: " 132543",
                                            children: [
                                                { name: " 1325431" },
                                                { name: " 1325432" },
                                            ] },
                                        { name: " 132544" },
                                    ] },
                                { name: " 13255" },
                                { name: " 13256" },
                                { name: " 13257",
                                    children: [
                                        { name: " 132571" },
                                        { name: " 132572",
                                            children: [
                                                { name: " 1325721" },
                                                { name: " 1325722" },
                                            ] },
                                        { name: " 132573",
                                            children: [
                                                { name: " 1325731" },
                                                { name: " 1325732" },
                                            ] },
                                    ] },
                            ] },
                    ] }
            ]
        },
        {
            name: " 14",
        },
        {
            name: " 15",
            children: [
                { name: " 151" },
                { name: " 152" },
                { name: " 153" },
                { name: " 154" },
                { name: " 155",
                    children: [
                        { name: " 1551",
                            children: [
                                { name: " 15511" },
                                { name: " 15512" },
                                { name: " 15513" },
                                { name: " 15514",
                                    children: [
                                        { name: " 155141" },
                                        { name: " 155142" },
                                    ] },
                                { name: " 15515",
                                    children: [
                                        { name: " 155151" },
                                        { name: " 155152" },
                                        { name: " 155153" },
                                    ] },
                                { name: " 15516" },
                            ] },
                        { name: " 1552" },
                        { name: " 1553" },
                        { name: " 1554",
                            children: [
                                { name: " 15541" },
                                { name: " 15542",
                                    children: [
                                        { name: " 155421" },
                                        { name: " 155422",
                                            children: [
                                                { name: " 1554221" },
                                            ] },
                                    ] },
                                { name: " 15543",
                                    children: [
                                        { name: " 155431" },
                                        { name: " 155432",
                                            children: [
                                                { name: " 1554321" },
                                            ] },
                                        { name: " 155433",
                                            children: [
                                                { name: " 1554331" },
                                            ] },
                                    ] },
                            ] },
                    ] },
                { name: " 156",
                    children: [
                        { name: " 1561" },
                        { name: " 1562" },
                        { name: " 1563" },
                        { name: " 1564",
                            children: [
                                { name: " 15641",
                                    children: [
                                        { name: " 156411" },
                                        { name: " 156412" },
                                        { name: " 156413" },
                                    ] },
                                { name: " 15642" },
                                { name: " 15643" },
                                { name: " 15644",
                                    children: [
                                        { name: " 156441",
                                            children: [
                                                { name: " 1564411" },
                                                { name: " 1564412" },
                                            ] },
                                        { name: " 156442" },
                                        { name: " 156443" },
                                        { name: " 156444" },
                                    ] },
                            ] },
                        { name: " 1565" },
                    ] }
            ]
        },
        {
            name: " 16"
        },
        {
            name: " 17"
        },
        {
            name: " 18",
            children: [
                { name: " 181", 
                    children: [
                        { name: " 181" },
                        { name: " 182" },
                        { name: " 183" },
                        { name: " 184", 
                            children: [
                                { name: " 1841", 
                                    children: [
                                        { name: " 18411" },
                                        { name: " 18412", 
                                            children: [
                                                { name: " 184121", 
                                                    children: [
                                                        { name: " 1841211" },
                                                        { name: " 1841212" },
                                                        { name: " 1841213" },
                                                        { name: " 1841214" },] },
                                                { name: " 184122", 
                                                    children: [
                                                        { name: " 1841221" },] },] },] },
                                { name: " 1842", 
                                    children: [
                                        { name: " 18421" },
                                        { name: " 18422" },
                                        { name: " 18423" },
                                        { name: " 18424" },
                                        { name: " 18425" },] },
                                { name: " 1843" },
                                { name: " 1844" },
                                { name: " 1845", 
                                    children: [
                                        { name: " 18451", 
                                            children: [
                                                { name: " 184511" },
                                                { name: " 184512" },] },
                                        { name: " 18452" },
                                        { name: " 18453", 
                                            children: [
                                                { name: " 184531" },] },] },
                                { name: " 1846" },
                                { name: " 1847" },] },
                        { name: " 185" },
                        { name: " 186", 
                            children: [
                                { name: " 1861" },
                                { name: " 1862", 
                                    children: [
                                        { name: " 18621" },
                                        { name: " 18622", 
                                            children: [
                                                { name: " 186221", 
                                                    children: [
                                                        { name: " 1862211" },
                                                        { name: " 1862212" },] },
                                                { name: " 186222" },] },
                                        { name: " 18623", 
                                            children: [
                                                { name: " 186231" },
                                                { name: " 186232" },] },] },
                                { name: " 1863", 
                                    children: [
                                        { name: " 18631" },
                                        { name: " 18632" },
                                        { name: " 18633" },] },
                                { name: " 1864", 
                                    children: [
                                        { name: " 18641" },
                                        { name: " 18642" },
                                        { name: " 18643" },
                                        { name: " 18644" },] },
                                { name: " 1865" },] }
                    ]
                 },
                
            ]
        }
    ]
};

