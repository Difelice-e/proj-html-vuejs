<template>
  <footer class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-3 grey-text">
          <!-- logo e contatti  -->
          <img src="../assets/svgs/svg-7.svg" class="logo" alt="" />
          <p class="paragraph py-3">
            A Functional HTML template for Corporate & Business
          </p>
          <ul>
            <li v-for="(contact, i) in contacts" :key="i" class="paragraph">
              <font-awesome-icon class="icon" :icon="contact.icon" />
              {{ contact.text }}
            </li>
          </ul>
          <button class="button outline-button dark mt-2">Get in touch</button>
        </div>

        <!-- link del footer  -->
        <div v-for="(footerTitle, i) in footerLinks" :key="i" class="col-3">
          <div class="footer-links">
            <h4 class="link-title mb-4">{{ footerTitle.title }}</h4>
            <ul>
              <li v-for="(link, i) in footerTitle.links" :key="i" class="paragraph">
                <a :href="link.href"
                  ><font-awesome-icon
                    class="icon"
                    icon="fa-solid fa-chevron-right"
                  />{{ link.name }}</a
                >
              </li>
            </ul>
          </div>
        </div>
        
        <!-- credits e copyright  -->
        <div class="col-6 paragraph">
          Enjoy the low price. We are tracking any intention of piracy
        </div>
        <div class="col-6 text-end paragraph">
          2020 NEXGEN is Proudly Powered by
          <span class="green-text">Codings</span>.
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      contacts: [
        {
          icon: "fa-solid fa-phone",
          text: "+1 (305) 1234-5678",
        },
        {
          icon: "fa-solid fa-envelope",
          text: "hello@example.com",
        },
        {
          icon: "fa-solid fa-location-dot",
          text: "Main Avenue, 987",
        },
      ],
      footerLinks: [
        {
          title: "About",
          links: [
            {
              name: "The Company",
              href: "#",
            },
            {
              name: "Institutional",
              href: "#",
            },
            {
              name: "Social & Events",
              href: "#",
            },
            {
              name: "Innovation",
              href: "#",
            },
            {
              name: "Enviroment",
              href: "#",
            },
            {
              name: "Technology",
              href: "#",
            },
          ],
        },
        {
          title: "Services",
          links: [
            {
              name: "Audit & Assurance",
              href: "#",
            },
            {
              name: "financial Advisory",
              href: "#",
            },
            {
              name: "Analytics M&A",
              href: "#",
            },
            {
              name: "Middle Marketing",
              href: "#",
            },
            {
              name: "Legal Consulting",
              href: "#",
            },
            {
              name: "Regulatory Risk",
              href: "#",
            },
          ],
        },
        {
          title: "Support",
          links: [
            {
              name: "Responsibility",
              href: "#",
            },
            {
              name: "Terms of Use",
              href: "#",
            },
            {
              name: "About Cookies",
              href: "#",
            },
            {
              name: "Privacy Policy",
              href: "#",
            },
            {
              name: "Accessibility",
              href: "#",
            },
            {
              name: "Information",
              href: "#",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/palette.scss';
footer {
  background-color: $woodsmoke;
  color: white;

  .logo {
    width: 150px;
  }

  ul {
    padding-left: 0;

    li {
      margin-bottom: 10px;
    }
  }

  .icon {
    margin-right: 10px;
  }

  .footer-links {
    margin-bottom: 250px;
    background-color: #19191f;
    padding: 20px;
    border-radius: 15px;

    .link-title {
      font-weight: 700;
    }
  }
}
</style>