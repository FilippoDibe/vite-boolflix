<!-- logo e voci della nav  -->
<script>
export default {
    name: 'HeaderNavSx'
}
</script>
<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid contenitore-nav">
            <img src="/img/netflix-logo.jpeg" class="img-fluid logo" alt="">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active home" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
            </div>
            <div class="collapse navbar-collapse justify-content-end " id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active home" aria-current="page" href="#"> <i class="fa fa-search"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">BAMBINI</a>
                    </li>
                    <li class="nav-item notification">
                        <a class="nav-link" href="#">
                            <i class="fas fa-bell"></i>
                            <span class="badge">1</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<style lang="scss" scoped>
nav {
    margin: 0;
    padding: 0;

    .contenitore-nav {
        background-color: #101010;

        .home {
            color: white
        }

        a {
            color: white;

            i {
                color: white;

            }
        }


    }



    .logo {
        width: 150px;
    }

    .notification {
        position: relative;
        display: inline-block;


        .badge {
            position: absolute;
            top: 3px;
            right: 2px;
            padding: 2.5px 5px;
            border-radius: 50%;
            background-color: red;
            color: white;
            font-size: 8px;
        }

    }

}
</style>