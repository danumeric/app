<template>
  <div class="redirect">
    <h1 class="redirect__text">Already registred?</h1>
    <router-link to="/auth" class="redirect__link"
      >Click for authorization</router-link
    >
  </div>
  <div class="reg _container">
    <div class="reg__block">
      <form name="reg" class="" @submit="submitRegForm">
        <input
          class="reg__fields"
          name="username"
          placeholder="login"
          required
        />
        <input
          type="password"
          class="reg__fields"
          name="password"
          placeholder="password"
          required
        />
        <input
          class="reg__fields"
          name="firstName"
          placeholder="first name"
          required
        />
        <input
          class="reg__fields"
          name="secondName"
          placeholder="second name"
          required
        />

        <div class="reg__sex">
          <p>Choose your sex:</p>
          <input
            @change="sexChanged"
            type="radio"
            id="sexMale"
            name="sex"
            value="men"
            checked
          />
          <label for="men">Male </label>
          <input
            @change="sexChanged"
            type="radio"
            id="sexFemale"
            name="sex"
            value="women"
          />
          <label for="women">Female</label>
        </div>
        <hr class="reg__hr" />
        <div class="reg__datepick">
          <label for="start">Birth date:</label>
          <input
            type="date"
            id="birthDate"
            name="birthDate"
            value="1994-01-01"
            min="1960-01-01"
            max="2010-12-31"
            required
          />
        </div>
        <hr class="reg__hr" />

        <div class="reg__country">
          Select your country:
          <select id="country" name="country" required>
            <option value="AF">Afghanistan</option>
            <option value="AL">Albania</option>
            <option value="DZ">Algeria</option>
            <option value="AS">American Samoa</option>
            <option value="AD">Andorra</option>
            <option value="AO">Angola</option>
            <option value="AI">Anguilla</option>
            <option value="AG">Antigua & Barbuda</option>
            <option value="AR">Argentina</option>
            <option value="AM">Armenia</option>
            <option value="AW">Aruba</option>
            <option value="AU">Australia</option>
            <option value="AT">Austria</option>
            <option value="AZ">Azerbaijan</option>
            <option value="BS">Bahamas</option>
            <option value="BH">Bahrain</option>
            <option value="BD">Bangladesh</option>
            <option value="BB">Barbados</option>
            <option value="BY">Belarus</option>
            <option value="BE">Belgium</option>
            <option value="BZ">Belize</option>
            <option value="BJ">Benin</option>
            <option value="BM">Bermuda</option>
            <option value="BT">Bhutan</option>
            <option value="BO">Bolivia</option>
            <option value="BA">Bosnia & Herzegovina</option>
            <option value="BW">Botswana</option>
            <option value="BR">Brazil</option>
            <option value="VG">British Indian Ocean Ter</option>
            <option value="BG">Bulgaria</option>
            <option value="BF">Burkina Faso</option>
            <option value="BI">Burundi</option>
            <option value="KH">Cambodia</option>
            <option value="CM">Cameroon</option>
            <option value="CA">Canada</option>
            <option value="CV">Cape Verde</option>
            <option value="KY">Cayman Islands</option>
            <option value="CF">Central African Republic</option>
            <option value="TD">Chad</option>
            <option value="CL">Chile</option>
            <option value="CN">China</option>
            <option value="CO">Colombia</option>
            <option value="KM">Comoros</option>
            <option value="CG">Congo</option>
            <option value="CR">Costa Rica</option>
            <option value="CI">Cote DIvoire</option>
            <option value="HR">Croatia</option>
            <option value="CU">Cuba</option>
            <option value="CY">Cyprus</option>
            <option value="CZ">Czech Republic</option>
            <option value="DK">Denmark</option>
            <option value="DJ">Djibouti</option>
            <option value="DM">Dominica</option>
            <option value="DO">Dominican Republic</option>
            <option value="EC">Ecuador</option>
            <option value="EG">Egypt</option>
            <option value="SV">El Salvador</option>
            <option value="GQ">Equatorial Guinea</option>
            <option value="ER">Eritrea</option>
            <option value="EE">Estonia</option>
            <option value="ET">Ethiopia</option>
            <option value="FJ">Fiji</option>
            <option value="FI">Finland</option>
            <option value="FR">France</option>
            <option value="GF">French Guiana</option>
            <option value="PF">French Polynesia</option>
            <option value="GA">Gabon</option>
            <option value="GM">Gambia</option>
            <option value="GE">Georgia</option>
            <option value="DE">Germany</option>
            <option value="GH">Ghana</option>
            <option value="GI">Gibraltar</option>
            <option value="GR">Greece</option>
            <option value="GL">Greenland</option>
            <option value="GD">Grenada</option>
            <option value="GP">Guadeloupe</option>
            <option value="GU">Guam</option>
            <option value="GT">Guatemala</option>
            <option value="GN">Guinea</option>
            <option value="GY">Guyana</option>
            <option value="HT">Haiti</option>
            <option value="HN">Honduras</option>
            <option value="HU">Hungary</option>
            <option value="IS">Iceland</option>
            <option value="ID">Indonesia</option>
            <option value="IN">India</option>
            <option value="IR">Iran</option>
            <option value="IQ">Iraq</option>
            <option value="IE">Ireland</option>
            <option value="IL">Israel</option>
            <option value="IT">Italy</option>
            <option value="JM">Jamaica</option>
            <option value="JP">Japan</option>
            <option value="JO">Jordan</option>
            <option value="KZ">Kazakhstan</option>
            <option value="KE">Kenya</option>
            <option value="KI">Kiribati</option>
            <option value="KP">Korea North</option>
            <option value="KR">Korea South</option>
            <option value="KW">Kuwait</option>
            <option value="KG">Kyrgyzstan</option>
            <option value="LA">Laos</option>
            <option value="LA">Latvia</option>
            <option value="LB">Lebanon</option>
            <option value="LS">Lesotho</option>
            <option value="LR">Liberia</option>
            <option value="LY">Libya</option>
            <option value="LI">Liechtenstein</option>
            <option value="LT">Lithuania</option>
            <option value="LU">Luxembourg</option>
            <option value="MK">Macedonia</option>
            <option value="MG">Madagascar</option>
            <option value="MY">Malaysia</option>
            <option value="MW">Malawi</option>
            <option value="MV">Maldives</option>
            <option value="ML">Mali</option>
            <option value="MT">Malta</option>
            <option value="MH">Marshall Islands</option>
            <option value="MQ">Martinique</option>
            <option value="MR">Mauritania</option>
            <option value="MU">Mauritius</option>
            <option value="MX">Mexico</option>
            <option value="MD">Moldova</option>
            <option value="MC">Monaco</option>
            <option value="MN">Mongolia</option>
            <option value="MA">Morocco</option>
            <option value="MZ">Mozambique</option>
            <option value="MM">Myanmar</option>
            <option value="NA">Nambia</option>
            <option value="NR">Nauru</option>
            <option value="NP">Nepal</option>
            <option value="NL">Netherlands (Holland, Europe)</option>
            <option value="NZ">New Zealand</option>
            <option value="NI">Nicaragua</option>
            <option value="NE">Niger</option>
            <option value="NG">Nigeria</option>
            <option value="NO">Norway</option>
            <option value="OM">Oman</option>
            <option value="PK">Pakistan</option>
            <option value="PS">Palestine</option>
            <option value="PA">Panama</option>
            <option value="PG">Papua New Guinea</option>
            <option value="PY">Paraguay</option>
            <option value="PE">Peru</option>
            <option value="PH">Philippines</option>
            <option value="PL">Poland</option>
            <option value="PT">Portugal</option>
            <option value="PR">Puerto Rico</option>
            <option value="QA">Qatar</option>
            <option value="RS">Republic of Serbia</option>
            <option value="RE">Reunion</option>
            <option value="RO">Romania</option>
            <option selected="selected" value="RU">Russia</option>
            <option value="RW">Rwanda</option>
            <option value="WS">Samoa</option>
            <option value="SM">San Marino</option>
            <option value="SA">Saudi Arabia</option>
            <option value="SN">Senegal</option>
            <option value="SC">Seychelles</option>
            <option value="SL">Sierra Leone</option>
            <option value="SG">Singapore</option>
            <option value="SK">Slovakia</option>
            <option value="SI">Slovenia</option>
            <option value="SB">Solomon Islands</option>
            <option value="SO">Somalia</option>
            <option value="ZA">South Africa</option>
            <option value="ES">Spain</option>
            <option value="LK">Sri Lanka</option>
            <option value="SD">Sudan</option>
            <option value="SR">Suriname</option>
            <option value="SZ">Swaziland</option>
            <option value="SE">Sweden</option>
            <option value="CH">Switzerland</option>
            <option value="SY">Syria</option>
            <option value="TW">Taiwan</option>
            <option value="TJ">Tajikistan</option>
            <option value="TZ">Tanzania</option>
            <option value="TH">Thailand</option>
            <option value="TG">Togo</option>
            <option value="TO">Tonga</option>
            <option value="TT">Trinidad & Tobago</option>
            <option value="TN">Tunisia</option>
            <option value="TR">Turkey</option>
            <option value="TM">Turkmenistan</option>
            <option value="TV">Tuvalu</option>
            <option value="UG">Uganda</option>
            <option value="GB">United Kingdom</option>
            <option value="UA">Ukraine</option>
            <option value="AE">United Arab Emirates</option>
            <option value="US">United States of America</option>
            <option value="UY">Uruguay</option>
            <option value="UZ">Uzbekistan</option>
            <option value="VU">Vanuatu</option>
            <option value="VE">Venezuela</option>
            <option value="VN">Vietnam</option>
            <option value="YE">Yemen</option>
            <option value="ZM">Zambia</option>
            <option value="ZW">Zimbabwe</option>
          </select>
        </div>
        <hr class="reg__hr" />

        <PictureForm @selectedAvatar="setImgAdress" ref="child" />
        <input
          type="submit"
          value="create Acc"
          class="reg__fields reg__submit"
        />
      </form>
      <div class="reg__failed">{{ alertMessage }}</div>
    </div>
  </div>
</template>

<script>
import PictureForm from "@/components/regForm/PictureForm";
const adressBackend = "https://safe-fjord-51597.herokuapp.com";
//const adressBackend = 'http://localhost:5000'
import { useMeta } from "vue-meta";

export default {
  setup() {
    useMeta({
      title: "registration",
      htmlAttrs: { lang: "en", amp: true },
    });
  },
  name: "RegView",
  data() {
    return {
      alertMessage: "",
      selectedAvatar: "",
    };
  },

  components: { PictureForm },

  methods: {
    setImgAdress(value) {
      this.selectedAvatar = value;
    },
    sexChanged() {
      //close grid photos and reset avatar
      this.$refs.child.hideGridClear();
    },
    async submitRegForm(e) {
      e.preventDefault();
      let f = document.forms.reg;
      let newUserObj = {
        username: f.username.value.toString(),
        password: f.password.value.toString(),
        firstName: f.firstName.value.toString(),
        secondName: f.secondName.value.toString(),
        sex: f.sex.value.toString(),
        birthDate: f.birthDate.value.toString(),
        country: f.country.value.toString(),
        selectedAvatar: this.selectedAvatar,
      };

      let response = await fetch(`${adressBackend}/auth/registration`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(newUserObj),
      });

      let result = await response.json();

      this.alertMessage = result.message;
      if (response.status === 200) {
        setTimeout(() => this.$router.push("auth"), 2000);
      }
    },
  },

  async mounted() {},
};
</script>

<style lang="scss" scoped>
._container {
  max-width: 1170px;
  margin: 10px auto 0px auto;
  height: 100vh;
  min-height: 100vh;
}
.redirect {
  font-size: 16px;
  &__text {
    color: #747b8b;
    display: block;
    margin: 5px 0px 0px 0px;
  }
  &__link {
    text-decoration: underline;
    color: rgb(90, 90, 90);
    display: inline-block;
    margin: 5px 0px 0px 0px;
  }
}
.reg {
  font-size: 16px;

  &__block {
    position: relative;
    display: block;
    width: 100%;
    max-width: 300px;
    margin: auto;
    padding: 15px;
    background-color: white;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }
  &__hr {
    height: 1px;
    background-color: rgb(218, 218, 218);
    margin: 5px 0px 0px 0px;
  }
  &__sex {
    input {
      display: inline-block;
      margin: 5px 0px 0px 0px;
      &#sexFemale,
      &#sexMale {
        vertical-align: middle;
        margin: 0;
      }
    }
  }
  &__datepick {
    margin: 10px 0px 0px 0px;
  }
  &__country {
    margin: 10px 0px 0px 0px;

    select {
      margin: 5px 0px 0px 0px;
      width: 75%;
      font-size: 16px;
    }
  }

  &__failed {
    color: red;
    margin: 10px 0px 0px 0px;
  }

  &__fields {
    display: inline-block;
    width: 100%;
    padding: 0 20px;
    line-height: 50px;
    height: 65px;
    background-color: white;
    border: 2px solid #e6e6e6;
    border-bottom-width: 3px;
    border-radius: 5px;
    outline: 0;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    margin: 5px 0px 0px 0px;

    &:not(:last-child) {
      margin-bottom: 10px;
    }

    &:focus {
      border-color: #cccccc;
    }
  }

  &__submit {
    cursor: pointer;
  }
}
</style>
