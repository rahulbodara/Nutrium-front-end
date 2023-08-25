import React from "react";

const CountrySelect = (props) => {
  const handlechange = (e) => {
    const { name, value } = e.target;
    props.setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  return (
    <div className={`flex select-none ${props?.className}`}>
      <div className="field-title min-w-[160px] flex-basis-[160px] md:min-w-[140px] md:flex-basis-[140px] flex border bg-[#FAFAFB] text-[1.1em] items-center z-[1] px-2.5 py-[5px] border-solid border-[#EEEEEE]">
        <label className="inline-block max-w-full">{props?.label}</label>
      </div>
      <div className="flex flex-grow">
        <div className="relative flex-grow select-none border border-[#EEEEEE]">
          <select
            className="w-full border-none focus:ring-0 text-[14px]"
            name={props.name}
            aria-invalid="false"
            value={props.value}
            onChange={handlechange}
          >
            <option data-code="AF" data-dialing-code="93" value="2">
              Afghanistan
            </option>
            <option data-code="AL" data-dialing-code="355" value="6">
              Albania
            </option>
            <option data-code="DZ" data-dialing-code="213" value="64">
              Algeria
            </option>
            <option data-code="AS" data-dialing-code="1684" value="11">
              American Samoa
            </option>
            <option data-code="AD" data-dialing-code="376" value="7">
              Andorra
            </option>
            <option data-code="AO" data-dialing-code="244" value="3">
              Angola
            </option>
            <option data-code="AI" data-dialing-code="1264" value="4">
              Anguilla
            </option>
            <option data-code="AQ" value="12">
              Antarctica
            </option>
            <option data-code="AG" data-dialing-code="1268" value="14">
              Antigua and Barbuda
            </option>
            <option data-code="AR" data-dialing-code="54" value="9">
              Argentina
            </option>
            <option data-code="AM" data-dialing-code="374" value="10">
              Armenia
            </option>
            <option data-code="AW" data-dialing-code="297" value="1">
              Aruba
            </option>
            <option data-code="AU" data-dialing-code="61" value="15">
              Australia
            </option>
            <option data-code="AT" data-dialing-code="43" value="16">
              Austria
            </option>
            <option data-code="AZ" data-dialing-code="994" value="17">
              Azerbaijan
            </option>
            <option data-code="BS" data-dialing-code="1242" value="25">
              Bahamas
            </option>
            <option data-code="BH" data-dialing-code="973" value="24">
              Bahrain
            </option>
            <option data-code="BD" data-dialing-code="880" value="22">
              Bangladesh
            </option>
            <option data-code="BB" data-dialing-code="1246" value="33">
              Barbados
            </option>
            <option data-code="BY" data-dialing-code="375" value="28">
              Belarus
            </option>
            <option data-code="BE" data-dialing-code="32" value="19">
              Belgium
            </option>
            <option data-code="BZ" data-dialing-code="501" value="29">
              Belize
            </option>
            <option data-code="BJ" data-dialing-code="229" value="20">
              Benin
            </option>
            <option data-code="BM" data-dialing-code="1441" value="30">
              Bermuda
            </option>
            <option data-code="BT" data-dialing-code="975" value="35">
              Bhutan
            </option>
            <option data-code="BO" data-dialing-code="591" value="31">
              Bolivia
            </option>
            <option data-code="BA" data-dialing-code="387" value="26">
              Bosnia and Herzegovina
            </option>
            <option data-code="BW" data-dialing-code="267" value="37">
              Botswana
            </option>
            <option data-code="BV" value="36">
              Bouvet Island
            </option>
            <option data-code="BR" data-dialing-code="55" value="32">
              Brazil
            </option>
            <option data-code="IO" data-dialing-code="246" value="105">
              British Indian Ocean Territory
            </option>
            <option data-code="VG" data-dialing-code="1284" value="239">
              British Virgin Islands
            </option>
            <option data-code="BN" data-dialing-code="673" value="34">
              Brunei
            </option>
            <option data-code="BG" data-dialing-code="359" value="23">
              Bulgaria
            </option>
            <option data-code="BF" data-dialing-code="226" value="21">
              Burkina Faso
            </option>
            <option data-code="BI" data-dialing-code="257" value="18">
              Burundi
            </option>
            <option data-code="KH" data-dialing-code="855" value="119">
              Cambodia
            </option>
            <option data-code="CM" data-dialing-code="237" value="45">
              Cameroon
            </option>
            <option data-code="CA" data-dialing-code="1" value="39">
              Canada
            </option>
            <option data-code="CV" data-dialing-code="238" value="51">
              Cape Verde
            </option>
            <option data-code="KY" data-dialing-code="1345" value="56">
              Cayman Islands
            </option>
            <option data-code="CF" data-dialing-code="236" value="38">
              Central African Republic
            </option>
            <option data-code="TD" data-dialing-code="235" value="216">
              Chad
            </option>
            <option data-code="CL" data-dialing-code="56" value="42">
              Chile
            </option>
            <option data-code="CN" data-dialing-code="86" value="43">
              China
            </option>
            <option data-code="CX" data-dialing-code="61" value="55">
              Christmas Island
            </option>
            <option data-code="CC" data-dialing-code="61" value="40">
              Cocos (Keeling) Islands
            </option>
            <option data-code="CO" data-dialing-code="57" value="49">
              Colombia
            </option>
            <option data-code="KM" data-dialing-code="269" value="50">
              Comoros
            </option>
            <option data-code="CK" data-dialing-code="682" value="48">
              Cook Islands
            </option>
            <option data-code="CR" data-dialing-code="506" value="52">
              Costa Rica
            </option>
            <option data-code="HR" data-dialing-code="385" value="99">
              Croatia
            </option>
            <option data-code="CU" data-dialing-code="53" value="53">
              Cuba
            </option>
            <option data-code="CW" data-dialing-code="599" value="54">
              Curaçao
            </option>
            <option data-code="CY" data-dialing-code="357" value="57">
              Cyprus
            </option>
            <option data-code="CZ" data-dialing-code="420" value="58">
              Czech Republic
            </option>
            <option data-code="CD" data-dialing-code="243" value="46">
              DR Congo
            </option>
            <option data-code="DK" data-dialing-code="45" value="62">
              Denmark
            </option>
            <option data-code="DJ" data-dialing-code="253" value="60">
              Djibouti
            </option>
            <option data-code="DM" data-dialing-code="1767" value="61">
              Dominica
            </option>
            <option data-code="DO" data-dialing-code="1809" value="63">
              Dominican Republic
            </option>
            <option data-code="EC" data-dialing-code="593" value="65">
              Ecuador
            </option>
            <option data-code="EG" data-dialing-code="20" value="66">
              Egypt
            </option>
            <option data-code="SV" data-dialing-code="503" value="200">
              El Salvador
            </option>
            <option data-code="GQ" data-dialing-code="240" value="88">
              Equatorial Guinea
            </option>
            <option data-code="ER" data-dialing-code="291" value="67">
              Eritrea
            </option>
            <option data-code="EE" data-dialing-code="372" value="70">
              Estonia
            </option>
            <option data-code="ET" data-dialing-code="251" value="71">
              Ethiopia
            </option>
            <option data-code="FK" data-dialing-code="500" value="74">
              Falkland Islands
            </option>
            <option data-code="FO" data-dialing-code="298" value="76">
              Faroe Islands
            </option>
            <option data-code="FJ" data-dialing-code="679" value="73">
              Fiji
            </option>
            <option data-code="FI" data-dialing-code="358" value="72">
              Finland
            </option>
            <option data-code="FR" data-dialing-code="33" value="75">
              France
            </option>
            <option data-code="GF" data-dialing-code="594" value="93">
              French Guiana
            </option>
            <option data-code="PF" data-dialing-code="689" value="186">
              French Polynesia
            </option>
            <option data-code="TF" value="13">
              French Southern and Antarctic Lands
            </option>
            <option data-code="GA" data-dialing-code="241" value="78">
              Gabon
            </option>
            <option data-code="GM" data-dialing-code="220" value="86">
              Gambia
            </option>
            <option data-code="GE" data-dialing-code="995" value="80">
              Georgia
            </option>
            <option data-code="DE" data-dialing-code="49" value="59">
              Germany
            </option>
            <option data-code="GH" data-dialing-code="233" value="82">
              Ghana
            </option>
            <option data-code="GI" data-dialing-code="350" value="83">
              Gibraltar
            </option>
            <option data-code="GR" data-dialing-code="30" value="89">
              Greece
            </option>
            <option data-code="GL" data-dialing-code="299" value="91">
              Greenland
            </option>
            <option data-code="GD" data-dialing-code="1473" value="90">
              Grenada
            </option>
            <option data-code="GP" data-dialing-code="590" value="85">
              Guadeloupe
            </option>
            <option data-code="GU" data-dialing-code="1671" value="94">
              Guam
            </option>
            <option data-code="GT" data-dialing-code="502" value="92">
              Guatemala
            </option>
            <option data-code="GG" data-dialing-code="44" value="81">
              Guernsey
            </option>
            <option data-code="GN" data-dialing-code="224" value="84">
              Guinea
            </option>
            <option data-code="GW" data-dialing-code="245" value="87">
              Guinea-Bissau
            </option>
            <option data-code="GY" data-dialing-code="592" value="95">
              Guyana
            </option>
            <option data-code="HT" data-dialing-code="509" value="100">
              Haiti
            </option>
            <option data-code="HM" value="97">
              Heard Island and McDonald Islands
            </option>
            <option data-code="HN" data-dialing-code="504" value="98">
              Honduras
            </option>
            <option data-code="HK" data-dialing-code="852" value="96">
              Hong Kong
            </option>
            <option data-code="HU" data-dialing-code="36" value="101">
              Hungary
            </option>
            <option data-code="IS" data-dialing-code="354" value="109">
              Iceland
            </option>
            <option
              data-code="IN"
              data-dialing-code="91"
              selected="selected"
              value="104"
            >
              India
            </option>
            <option data-code="ID" data-dialing-code="62" value="102">
              Indonesia
            </option>
            <option data-code="IR" data-dialing-code="98" value="107">
              Iran
            </option>
            <option data-code="IQ" data-dialing-code="964" value="108">
              Iraq
            </option>
            <option data-code="IE" data-dialing-code="353" value="106">
              Ireland
            </option>
            <option data-code="IM" data-dialing-code="44" value="103">
              Isle of Man
            </option>
            <option data-code="IL" data-dialing-code="972" value="110">
              Israel
            </option>
            <option data-code="IT" data-dialing-code="39" value="111">
              Italy
            </option>
            <option data-code="CI" data-dialing-code="225" value="44">
              Ivory Coast
            </option>
            <option data-code="JM" data-dialing-code="1876" value="112">
              Jamaica
            </option>
            <option data-code="JP" data-dialing-code="81" value="115">
              Japan
            </option>
            <option data-code="JE" data-dialing-code="44" value="113">
              Jersey
            </option>
            <option data-code="JO" data-dialing-code="962" value="114">
              Jordan
            </option>
            <option data-code="KZ" data-dialing-code="76" value="116">
              Kazakhstan
            </option>
            <option data-code="KE" data-dialing-code="254" value="117">
              Kenya
            </option>
            <option data-code="KI" data-dialing-code="686" value="120">
              Kiribati
            </option>
            <option data-code="XK" data-dialing-code="383" value="123">
              Kosovo
            </option>
            <option data-code="KW" data-dialing-code="965" value="124">
              Kuwait
            </option>
            <option data-code="KG" data-dialing-code="996" value="118">
              Kyrgyzstan
            </option>
            <option data-code="LA" data-dialing-code="856" value="125">
              Laos
            </option>
            <option data-code="LV" data-dialing-code="371" value="135">
              Latvia
            </option>
            <option data-code="LB" data-dialing-code="961" value="126">
              Lebanon
            </option>
            <option data-code="LS" data-dialing-code="266" value="132">
              Lesotho
            </option>
            <option data-code="LR" data-dialing-code="231" value="127">
              Liberia
            </option>
            <option data-code="LY" data-dialing-code="218" value="128">
              Libya
            </option>
            <option data-code="LI" data-dialing-code="423" value="130">
              Liechtenstein
            </option>
            <option data-code="LT" data-dialing-code="370" value="133">
              Lithuania
            </option>
            <option data-code="LU" data-dialing-code="352" value="134">
              Luxembourg
            </option>
            <option data-code="MO" data-dialing-code="853" value="136">
              Macau
            </option>
            <option data-code="MK" data-dialing-code="389" value="145">
              Macedonia
            </option>
            <option data-code="MG" data-dialing-code="261" value="141">
              Madagascar
            </option>
            <option data-code="MW" data-dialing-code="265" value="157">
              Malawi
            </option>
            <option data-code="MY" data-dialing-code="60" value="158">
              Malaysia
            </option>
            <option data-code="MV" data-dialing-code="960" value="142">
              Maldives
            </option>
            <option data-code="ML" data-dialing-code="223" value="146">
              Mali
            </option>
            <option data-code="MT" data-dialing-code="356" value="147">
              Malta
            </option>
            <option data-code="MH" data-dialing-code="692" value="144">
              Marshall Islands
            </option>
            <option data-code="MQ" data-dialing-code="596" value="155">
              Martinique
            </option>
            <option data-code="MR" data-dialing-code="222" value="153">
              Mauritania
            </option>
            <option data-code="MU" data-dialing-code="230" value="156">
              Mauritius
            </option>
            <option data-code="YT" data-dialing-code="262" value="159">
              Mayotte
            </option>
            <option data-code="MX" data-dialing-code="52" value="143">
              Mexico
            </option>
            <option data-code="FM" data-dialing-code="691" value="77">
              Micronesia
            </option>
            <option data-code="MD" data-dialing-code="373" value="140">
              Moldova
            </option>
            <option data-code="MC" data-dialing-code="377" value="139">
              Monaco
            </option>
            <option data-code="MN" data-dialing-code="976" value="150">
              Mongolia
            </option>
            <option data-code="ME" data-dialing-code="382" value="149">
              Montenegro
            </option>
            <option data-code="MS" data-dialing-code="1664" value="154">
              Montserrat
            </option>
            <option data-code="MA" data-dialing-code="212" value="138">
              Morocco
            </option>
            <option data-code="MZ" data-dialing-code="258" value="152">
              Mozambique
            </option>
            <option data-code="MM" data-dialing-code="95" value="148">
              Myanmar
            </option>
            <option data-code="NA" data-dialing-code="264" value="160">
              Namibia
            </option>
            <option data-code="NR" data-dialing-code="674" value="170">
              Nauru
            </option>
            <option data-code="NP" data-dialing-code="977" value="169">
              Nepal
            </option>
            <option data-code="NL" data-dialing-code="31" value="167">
              Netherlands
            </option>
            <option data-code="NC" data-dialing-code="687" value="161">
              New Caledonia
            </option>
            <option data-code="NZ" data-dialing-code="64" value="171">
              New Zealand
            </option>
            <option data-code="NI" data-dialing-code="505" value="165">
              Nicaragua
            </option>
            <option data-code="NE" data-dialing-code="227" value="162">
              Niger
            </option>
            <option data-code="NG" data-dialing-code="234" value="164">
              Nigeria
            </option>
            <option data-code="NU" data-dialing-code="683" value="166">
              Niue
            </option>
            <option data-code="NF" data-dialing-code="672" value="163">
              Norfolk Island
            </option>
            <option data-code="KP" data-dialing-code="850" value="182">
              North Korea
            </option>
            <option data-code="MP" data-dialing-code="1670" value="151">
              Northern Mariana Islands
            </option>
            <option data-code="NO" data-dialing-code="47" value="168">
              Norway
            </option>
            <option data-code="OM" data-dialing-code="968" value="172">
              Oman
            </option>
            <option data-code="PK" data-dialing-code="92" value="173">
              Pakistan
            </option>
            <option data-code="PW" data-dialing-code="680" value="178">
              Palau
            </option>
            <option data-code="PS" data-dialing-code="970" value="185">
              Palestine
            </option>
            <option data-code="PA" data-dialing-code="507" value="174">
              Panama
            </option>
            <option data-code="PG" data-dialing-code="675" value="179">
              Papua New Guinea
            </option>
            <option data-code="PY" data-dialing-code="595" value="184">
              Paraguay
            </option>
            <option data-code="PE" data-dialing-code="51" value="176">
              Peru
            </option>
            <option data-code="PH" data-dialing-code="63" value="177">
              Philippines
            </option>
            <option data-code="PN" data-dialing-code="64" value="175">
              Pitcairn Islands
            </option>
            <option data-code="PL" data-dialing-code="48" value="180">
              Poland
            </option>
            <option data-code="PT" data-dialing-code="351" value="183">
              Portugal
            </option>
            <option data-code="PR" data-dialing-code="1787" value="181">
              Puerto Rico
            </option>
            <option data-code="QA" data-dialing-code="974" value="187">
              Qatar
            </option>
            <option data-code="CG" data-dialing-code="242" value="47">
              Republic of the Congo
            </option>
            <option data-code="RO" data-dialing-code="40" value="189">
              Romania
            </option>
            <option data-code="RU" data-dialing-code="7" value="190">
              Russia
            </option>
            <option data-code="RW" data-dialing-code="250" value="191">
              Rwanda
            </option>
            <option data-code="RE" data-dialing-code="262" value="188">
              Réunion
            </option>
            <option data-code="BL" data-dialing-code="590" value="27">
              Saint Barthélemy
            </option>
            <option data-code="KN" data-dialing-code="1869" value="121">
              Saint Kitts and Nevis
            </option>
            <option data-code="LC" data-dialing-code="1758" value="129">
              Saint Lucia
            </option>
            <option data-code="MF" data-dialing-code="590" value="137">
              Saint Martin
            </option>
            <option data-code="PM" data-dialing-code="508" value="203">
              Saint Pierre and Miquelon
            </option>
            <option data-code="VC" data-dialing-code="1784" value="237">
              Saint Vincent and the Grenadines
            </option>
            <option data-code="WS" data-dialing-code="685" value="244">
              Samoa
            </option>
            <option data-code="SM" data-dialing-code="378" value="201">
              San Marino
            </option>
            <option data-code="SA" data-dialing-code="966" value="192">
              Saudi Arabia
            </option>
            <option data-code="SN" data-dialing-code="221" value="194">
              Senegal
            </option>
            <option data-code="RS" data-dialing-code="381" value="204">
              Serbia
            </option>
            <option data-code="SC" data-dialing-code="248" value="213">
              Seychelles
            </option>
            <option data-code="SL" data-dialing-code="232" value="199">
              Sierra Leone
            </option>
            <option data-code="SG" data-dialing-code="65" value="195">
              Singapore
            </option>
            <option data-code="SX" data-dialing-code="1721" value="212">
              Sint Maarten
            </option>
            <option data-code="SK" data-dialing-code="421" value="208">
              Slovakia
            </option>
            <option data-code="SI" data-dialing-code="386" value="209">
              Slovenia
            </option>
            <option data-code="SB" data-dialing-code="677" value="198">
              Solomon Islands
            </option>
            <option data-code="SO" data-dialing-code="252" value="202">
              Somalia
            </option>
            <option data-code="ZA" data-dialing-code="27" value="246">
              South Africa
            </option>
            <option data-code="GS" data-dialing-code="500" value="196">
              South Georgia
            </option>
            <option data-code="KR" data-dialing-code="82" value="122">
              South Korea
            </option>
            <option data-code="SS" data-dialing-code="211" value="205">
              South Sudan
            </option>
            <option data-code="ES" data-dialing-code="34" value="69">
              Spain
            </option>
            <option data-code="LK" data-dialing-code="94" value="131">
              Sri Lanka
            </option>
            <option data-code="SD" data-dialing-code="249" value="193">
              Sudan
            </option>
            <option data-code="SR" data-dialing-code="597" value="207">
              Suriname
            </option>
            <option data-code="SJ" data-dialing-code="4779" value="197">
              Svalbard and Jan Mayen
            </option>
            <option data-code="SZ" data-dialing-code="268" value="211">
              Swaziland
            </option>
            <option data-code="SE" data-dialing-code="46" value="210">
              Sweden
            </option>
            <option data-code="CH" data-dialing-code="41" value="41">
              Switzerland
            </option>
            <option data-code="SY" data-dialing-code="963" value="214">
              Syria
            </option>
            <option data-code="ST" data-dialing-code="239" value="206">
              São Tomé and Príncipe
            </option>
            <option data-code="TW" data-dialing-code="886" value="228">
              Taiwan
            </option>
            <option data-code="TJ" data-dialing-code="992" value="219">
              Tajikistan
            </option>
            <option data-code="TZ" data-dialing-code="255" value="229">
              Tanzania
            </option>
            <option data-code="TH" data-dialing-code="66" value="218">
              Thailand
            </option>
            <option data-code="TL" data-dialing-code="670" value="222">
              Timor-Leste
            </option>
            <option data-code="TG" data-dialing-code="228" value="217">
              Togo
            </option>
            <option data-code="TK" data-dialing-code="690" value="220">
              Tokelau
            </option>
            <option data-code="TO" data-dialing-code="676" value="223">
              Tonga
            </option>
            <option data-code="TT" data-dialing-code="1868" value="224">
              Trinidad and Tobago
            </option>
            <option data-code="TN" data-dialing-code="216" value="225">
              Tunisia
            </option>
            <option data-code="TR" data-dialing-code="90" value="226">
              Turkey
            </option>
            <option data-code="TM" data-dialing-code="993" value="221">
              Turkmenistan
            </option>
            <option data-code="TC" data-dialing-code="1649" value="215">
              Turks and Caicos Islands
            </option>
            <option data-code="TV" data-dialing-code="688" value="227">
              Tuvalu
            </option>
            <option data-code="UG" data-dialing-code="256" value="230">
              Uganda
            </option>
            <option data-code="UA" data-dialing-code="380" value="231">
              Ukraine
            </option>
            <option data-code="AE" data-dialing-code="971" value="8">
              United Arab Emirates
            </option>
            <option data-code="GB" data-dialing-code="44" value="79">
              United Kingdom
            </option>
            <option data-code="US" data-dialing-code="1" value="234">
              United States
            </option>
            <option data-code="UM" data-dialing-code="1" value="232">
              United States Minor Outlying Islands
            </option>
            <option data-code="VI" data-dialing-code="1340" value="240">
              United States Virgin Islands
            </option>
            <option data-code="UY" data-dialing-code="598" value="233">
              Uruguay
            </option>
            <option data-code="UZ" data-dialing-code="998" value="235">
              Uzbekistan
            </option>
            <option data-code="VU" data-dialing-code="678" value="242">
              Vanuatu
            </option>
            <option data-code="VA" data-dialing-code="3906698" value="236">
              Vatican City
            </option>
            <option data-code="VE" data-dialing-code="58" value="238">
              Venezuela
            </option>
            <option data-code="VN" data-dialing-code="84" value="241">
              Vietnam
            </option>
            <option data-code="WF" data-dialing-code="681" value="243">
              Wallis and Futuna
            </option>
            <option data-code="EH" data-dialing-code="212" value="68">
              Western Sahara
            </option>
            <option data-code="YE" data-dialing-code="967" value="245">
              Yemen
            </option>
            <option data-code="ZM" data-dialing-code="260" value="247">
              Zambia
            </option>
            <option data-code="ZW" data-dialing-code="263" value="248">
              Zimbabwe
            </option>
            <option data-code="AX" data-dialing-code="358" value="5">
              Åland Islands
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CountrySelect;
