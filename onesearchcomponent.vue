<template>
<form class="form-inline onesearch-jumbotron" name="searchPrimoForm1" role="search" method="get" action="https://cuny-kb.primo.exlibrisgroup.com/discovery/search" onsubmit="addPrimoQuery();" enctype="application/x-www-form-urlencoded; charset=utf-8" id="formToAppendInputsTo">
    <!-- default is "everything"  option suggested from OLS widget builder -->
    <input name="vid" value="01CUNY_KB:CUNY_KB" type="hidden" />
    <input name="tab" value="Everything" type="hidden" id="tabSetting" />
    <input name="search_scope" value="IZ_CI_AW" type="hidden" id=SearchScopeSetting />
    <input name="mode" value="basic" type="hidden" />
    <input name="highlight" value="true" type="hidden" />
    <input name="displayMode" value="full" type="hidden" />
    <input name="bulkSize" value="10" type="hidden" />
    <input name="dum" value="true" type="hidden" />
    <input name="displayField" value="all" type="hidden" />
    <input name="pcAvailabiltyMode" value="false" type="hidden" />
    <input name="query" id="primoQuery" type="hidden" />
    <h1 id="onesearch-header">
        <a href="https://cuny-kb.primo.exlibrisgroup.com/discovery/search?tab=Everything&vid=01CUNY_KB:CUNY_KB&lang=en">
            <img class="image-fail onesearchsubmit" src="https://libapps.s3.amazonaws.com/accounts/16298/images/onesearch_logo.png" alt="OneSearch" />
        </a>
    </h1>
    <div class="form-group" id="flex-search-form">
        <div class="dropdown input-group zero-margin" id="blue-border1">
            <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" aria-label="Define Your Search">
                <span id="defineYourSearch">{{ displayedItem }}&nbsp</span><span class="caret"></span>
            </button>
            <ul class="dropdown-menu fade dropdown-margin" aria-labelledby="dropdownMenu1">
                <li>
                    <a v-for="(item, itemName) in materialType" :key="item.id" class="searchmenu" @click="displayedItem = itemName">
                        <div class="highlight-menu-item bigger-fancy-text">
                            <strong>{{ item.fullName }}</strong>
                        </div>
                    </a>
                    <a href="https://cuny-kb.primo.exlibrisgroup.com/discovery/search?vid=01CUNY_KB:CUNY_KB&lang=en&mode=advanced" class="searchmenu">
                        <div class="highlight-menu-item bigger-fancy-text">
                            <strong>Advanced Search</strong>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <label class="sr-only" for="primoQueryTemp">Search terms</label>
        <div class="input-group zero-margin form-width" id="blue-border2">
            <input class="form-control form-width inherit-height-from-flex" name="queryTemp" id="primoQueryTemp" type="search" value="" :placeholder="(( placeholderError == false ) ? 'Enter search term here' : 'Please make a selection')">
        </div>
        <div class="input-group zero-margin" id="blue-border3">
            <input type="submit" class="btn btn-default form-control onesearchsubmit inherit-height-from-flex" value="Search" @click.stop.prevent="submitSearch"/>
        </div>
    </div>
</form>
</template>

<script>
export default {
  methods: {
    submitSearch() {
      if ( this.displayedItem == "Define Your Search" ) {
        this.placeholderError = true;
        $("#dropdownMenu1").trigger('click.bs.dropdown.data-api'); // open the dropdown
      } else {
        this.placeholderError = false;
        document.getElementById("primoQuery").value = "any,contains," + document.getElementById("primoQueryTemp").value.replace(/[,]/g, " "); // original OLS widget
      }
    }
  },
  data() {
    return {
      placeholderError: false,
      displayedItem: "Define Your Search",
      materialType: {
        Books: {
          fullName: 'Books',
          baseUrl: 'https://cuny-kb.primo.exlibrisgroup.com/discovery/search',
          tab: 'Everything',
          searchScope: 'IZ_CI_AW',
          input: '<input name="facet" value="rtype,include,books" type="hidden" />',
          id: 1
        },
        Articles: {
          fullName: 'Articles (Peer reviewed)',
          baseUrl: 'https://cuny-kb.primo.exlibrisgroup.com/discovery/search',
          tab: 'Everything',
          searchScope: 'IZ_CI_AW',
          input: '<input name="mfacet" value="rtype,include,articles,1" type="hidden" /><input name="facet" value="tlevel,include,peer_reviewed" type="hidden" class="deleteWithDropdownChange" />',
          id: 2
        },
        Reserves: {
          fullName: 'Course reserves',
          baseUrl: 'https://cuny-kb.primo.exlibrisgroup.com/discovery/search',
          tab: 'CourseReserves',
          searchScope: 'CourseReserves',
          input: '',
          id: 3
        },
        Newspapers: {
          fullName: 'Newspapers and Magazines',
          baseUrl: 'https://cuny-kb.primo.exlibrisgroup.com/discovery/npsearch',
          tab: 'Everything',
          searchScope: 'IZ_CI_AW',
          input: '',
          id: 4
        },
        Journals: {
          fullName: 'Journals',
          baseUrl: 'https://cuny-kb.primo.exlibrisgroup.com/discovery/jsearch',
          tab: 'jsearch_slot',
          searchScope: 'IZ_CI_AW',
          input: '',
          id: 5
        },
      }
    }
  }
}
</script>

<style scoped>
/* add flex so that blue box-shadows line up */
#flex-search-form {
        display: flex;
        flex-direction: row;
        justify-content: center;
}
.inherit-height-from-flex { height: inherit; }

/* shadow for the search bar */
#blue-border1 {
        box-shadow: 0 5px 0 #003466, 0 -5px 0 #003466, -5px -5px 0 #003466, -5px 5px 0 #003466;
}
#blue-border2 {
        box-shadow: 0 -5px 0 #003466, 0 5px 0 #003466;
}
#blue-border3 {
        box-shadow: 0 5px 0 #003466, 0 -5px 0 #003466, 5px -5px 0 #003466, 5px 5px 0 #003466;
}
</style>
