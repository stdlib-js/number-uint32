# CHANGELOG

> Package changelog.

<section class="release" id="v0.3.0">

## 0.3.0 (2026-01-30)

<section class="features">

### Features

-   [`9bdb8b6`](https://github.com/stdlib-js/stdlib/commit/9bdb8b63fdcee0dd665dcf362f5565c86ee1b0f8) - update `number/uint32/base` TypeScript declarations
-   [`6395a59`](https://github.com/stdlib-js/stdlib/commit/6395a594129fad4072e902ecb8609edd93a65e4b) - add `identity` to `number/uint32/base` namespace
-   [`f2fc18c`](https://github.com/stdlib-js/stdlib/commit/f2fc18cfdef838d3fbd6090169318c4584153ba3) - add `number/uint32/base/identity` [(#7844)](https://github.com/stdlib-js/stdlib/pull/7844)
-   [`4b55b3a`](https://github.com/stdlib-js/stdlib/commit/4b55b3ad7a705ef130ab65d2d647783cbcf5a682) - add C API and clean-up
-   [`c763537`](https://github.com/stdlib-js/stdlib/commit/c76353782ad54e7ce0eb4cd9a33038414106a34d) - add `sub` to namespace
-   [`d946b86`](https://github.com/stdlib-js/stdlib/commit/d946b86803638384d1b6b5aa0999163a5b461455) - add `number/uint32/base/sub`
-   [`3065981`](https://github.com/stdlib-js/stdlib/commit/30659819eef6e49a82422491e77e758e8249b6a8) - add `muldw` to namespace
-   [`1e80a21`](https://github.com/stdlib-js/stdlib/commit/1e80a2156210812c8c803ccc8d7311f0894a356d) - add `mul` to namespace
-   [`9b26fe7`](https://github.com/stdlib-js/stdlib/commit/9b26fe7da6f728ccb30d823d4945bd0c4d30198e) - add `add` to namespace
-   [`8c4b38b`](https://github.com/stdlib-js/stdlib/commit/8c4b38bea72599bed101a3a38a4f4ed05c003570) - add `number/uint32/base/add`
-   [`5014579`](https://github.com/stdlib-js/stdlib/commit/50145790965ef11b4a7852a79944776f6d1e9c6f) - add `number/uint32/base/muldw`
-   [`348d584`](https://github.com/stdlib-js/stdlib/commit/348d5840b4d4931cf29946caef15ffa4b181ebd3) - add `number/uint32/base/mul`

</section>

<!-- /.features -->

<section class="issues">

### Closed Issues

This release closes the following issue:

[#8170](https://github.com/stdlib-js/stdlib/issues/8170)

</section>

<!-- /.issues -->

<section class="commits">

### Commits

<details>

-   [`82f9d54`](https://github.com/stdlib-js/stdlib/commit/82f9d5484c3beda739ac298abd28983b6cc9750d) - **bench:** refactor to use string interpolation in `number/uint32/base/mul` [(#8944)](https://github.com/stdlib-js/stdlib/pull/8944) _(by Krishna Awasthi)_
-   [`7db5b32`](https://github.com/stdlib-js/stdlib/commit/7db5b32afe976e2d3c216a45e0927c88e668d340) - **chore:** add `alias_prefix` to parent namespaces [(#8540)](https://github.com/stdlib-js/stdlib/pull/8540) _(by Gunj Joshi)_
-   [`5f5bb2d`](https://github.com/stdlib-js/stdlib/commit/5f5bb2d4277a24000b57fb07bc28d821500cd7e8) - **docs:** update namespace table of contents [(#8425)](https://github.com/stdlib-js/stdlib/pull/8425) _(by stdlib-bot, Athan Reines)_
-   [`f920adc`](https://github.com/stdlib-js/stdlib/commit/f920adcf8021ad52af5d9725573a67717e7a67a1) - **chore:** fix C lint errors [(#8180)](https://github.com/stdlib-js/stdlib/pull/8180) _(by Navyansh Kesarwani, Athan Reines)_
-   [`9bdb8b6`](https://github.com/stdlib-js/stdlib/commit/9bdb8b63fdcee0dd665dcf362f5565c86ee1b0f8) - **feat:** update `number/uint32/base` TypeScript declarations _(by Philipp Burckhardt)_
-   [`6395a59`](https://github.com/stdlib-js/stdlib/commit/6395a594129fad4072e902ecb8609edd93a65e4b) - **feat:** add `identity` to `number/uint32/base` namespace _(by Philipp Burckhardt)_
-   [`7add020`](https://github.com/stdlib-js/stdlib/commit/7add0201c13e56a0381926ccfd4073c84eaf2ed4) - **test:** use standardized assertion messages and fix lint errors _(by Philipp Burckhardt)_
-   [`11581aa`](https://github.com/stdlib-js/stdlib/commit/11581aaca8c3cb824cbb92c0c0f80e76890bdb20) - **test:** use standardized assertion messages and fix lint errors _(by Philipp Burckhardt)_
-   [`7483bef`](https://github.com/stdlib-js/stdlib/commit/7483bef13b1d3241347266d25a02957269419825) - **test:** use .strictEqual() instead of .equal() _(by Philipp Burckhardt)_
-   [`8c20ca4`](https://github.com/stdlib-js/stdlib/commit/8c20ca47e294c672e2261ca79452861dc3dd0764) - **bench:** fix types in C benchmarks [(#7865)](https://github.com/stdlib-js/stdlib/pull/7865) _(by Gunj Joshi)_
-   [`b5cb6da`](https://github.com/stdlib-js/stdlib/commit/b5cb6da6915e43b4f3aec2387d3e2cd9f9b0999d) - **docs:** replace `integer` by `uinteger` in JSDocs [(#7866)](https://github.com/stdlib-js/stdlib/pull/7866) _(by Gunj Joshi)_
-   [`64bb2ec`](https://github.com/stdlib-js/stdlib/commit/64bb2ec054f33f324751b4c54c06ac1dbc66186c) - **bench:** fix types in C benchmarks [(#7864)](https://github.com/stdlib-js/stdlib/pull/7864) _(by Gunj Joshi)_
-   [`1a121d7`](https://github.com/stdlib-js/stdlib/commit/1a121d7bf505791d601cf733a37eded4b18d8876) - **docs:** fix missing includes _(by Athan Reines)_
-   [`d182d88`](https://github.com/stdlib-js/stdlib/commit/d182d88cd06e8d8bd18699a5da4bd1cd23de24e2) - **docs:** use correct types in `number/uint32/base/add` [(#7850)](https://github.com/stdlib-js/stdlib/pull/7850) _(by Gunj Joshi)_
-   [`f2fc18c`](https://github.com/stdlib-js/stdlib/commit/f2fc18cfdef838d3fbd6090169318c4584153ba3) - **feat:** add `number/uint32/base/identity` [(#7844)](https://github.com/stdlib-js/stdlib/pull/7844) _(by Gunj Joshi, Athan Reines)_
-   [`c0af677`](https://github.com/stdlib-js/stdlib/commit/c0af6777b804074d251bf0699b72ffb6af803ff6) - **docs:** update related packages sections [(#7352)](https://github.com/stdlib-js/stdlib/pull/7352) _(by stdlib-bot)_
-   [`c584077`](https://github.com/stdlib-js/stdlib/commit/c5840770ca22e8717a880d1f1ced8496f7f5a62e) - **docs:** update namespace table of contents [(#7283)](https://github.com/stdlib-js/stdlib/pull/7283) _(by stdlib-bot)_
-   [`5896836`](https://github.com/stdlib-js/stdlib/commit/5896836635aa28aba7c97b3f21d32735d867c43b) - **build:** add package meta data _(by Athan Reines)_
-   [`6c6fd79`](https://github.com/stdlib-js/stdlib/commit/6c6fd79627e1c79e5f98e53a05456057986c911a) - **build:** add package meta data _(by Athan Reines)_
-   [`6803252`](https://github.com/stdlib-js/stdlib/commit/68032524e51f5f6b82e06e13253836ec5a539c40) - **build:** add package meta data _(by Athan Reines)_
-   [`4b55b3a`](https://github.com/stdlib-js/stdlib/commit/4b55b3ad7a705ef130ab65d2d647783cbcf5a682) - **feat:** add C API and clean-up _(by Athan Reines)_
-   [`5572fe5`](https://github.com/stdlib-js/stdlib/commit/5572fe564738f6def14cb6e1d8c0c39358f805a5) - **chore:** add notes and clean-up _(by Athan Reines)_
-   [`c763537`](https://github.com/stdlib-js/stdlib/commit/c76353782ad54e7ce0eb4cd9a33038414106a34d) - **feat:** add `sub` to namespace _(by Athan Reines)_
-   [`d946b86`](https://github.com/stdlib-js/stdlib/commit/d946b86803638384d1b6b5aa0999163a5b461455) - **feat:** add `number/uint32/base/sub` _(by Athan Reines)_
-   [`3065981`](https://github.com/stdlib-js/stdlib/commit/30659819eef6e49a82422491e77e758e8249b6a8) - **feat:** add `muldw` to namespace _(by Athan Reines)_
-   [`1e80a21`](https://github.com/stdlib-js/stdlib/commit/1e80a2156210812c8c803ccc8d7311f0894a356d) - **feat:** add `mul` to namespace _(by Athan Reines)_
-   [`9b26fe7`](https://github.com/stdlib-js/stdlib/commit/9b26fe7da6f728ccb30d823d4945bd0c4d30198e) - **feat:** add `add` to namespace _(by Athan Reines)_
-   [`8c4b38b`](https://github.com/stdlib-js/stdlib/commit/8c4b38bea72599bed101a3a38a4f4ed05c003570) - **feat:** add `number/uint32/base/add` _(by Athan Reines)_
-   [`5014579`](https://github.com/stdlib-js/stdlib/commit/50145790965ef11b4a7852a79944776f6d1e9c6f) - **feat:** add `number/uint32/base/muldw` _(by Gururaj Gurram)_
-   [`2540748`](https://github.com/stdlib-js/stdlib/commit/2540748e5850b4f7e8268904faeec1f2e9cb7bfd) - **refactor:** update paths _(by Gururaj Gurram)_
-   [`348d584`](https://github.com/stdlib-js/stdlib/commit/348d5840b4d4931cf29946caef15ffa4b181ebd3) - **feat:** add `number/uint32/base/mul` _(by Gururaj Gurram)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 6 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Gunj Joshi
-   Gururaj Gurram
-   Krishna Awasthi
-   Navyansh Kesarwani
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.2">

## 0.2.2 (2024-07-28)

<section class="commits">

### Commits

<details>

-   [`41d41e9`](https://github.com/stdlib-js/stdlib/commit/41d41e959b4eaad3c631e6898e3144a4015a5458) - **test:** include trailing newlines in Julia-generated JSON fixtures _(by Philipp Burckhardt)_
-   [`9ed7d0e`](https://github.com/stdlib-js/stdlib/commit/9ed7d0e7d57edb5ad0dfb65c944bed87d475cbf3) - **chore:** add missing trailing newlines _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-24)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-14)

<section class="commits">

### Commits

<details>

-   [`dea49e0`](https://github.com/stdlib-js/stdlib/commit/dea49e03ab5571233e3da26835a6a6d3256d5737) - **docs:** use single quotes in require calls instead of backticks _(by Philipp Burckhardt)_
-   [`8affb20`](https://github.com/stdlib-js/stdlib/commit/8affb20402cfd15cf33663a601541b36cc7edb56) - **docs:** update related packages sections [(#1248)](https://github.com/stdlib-js/stdlib/pull/1248) _(by stdlib-bot)_
-   [`cf3668f`](https://github.com/stdlib-js/stdlib/commit/cf3668f92234f5b25369001ca6a05a434d577ba1) - **docs:** update related packages sections [(#1210)](https://github.com/stdlib-js/stdlib/pull/1210) _(by stdlib-bot)_
-   [`26cf434`](https://github.com/stdlib-js/stdlib/commit/26cf4347b243f1f363273481512e1ffebcb27ad5) - **docs:** update related packages sections [(#1156)](https://github.com/stdlib-js/stdlib/pull/1156) _(by stdlib-bot)_
-   [`73f98e4`](https://github.com/stdlib-js/stdlib/commit/73f98e4e8dea53ece4a617b042f9d817643b4850) - **docs:** update related packages sections [(#1150)](https://github.com/stdlib-js/stdlib/pull/1150) _(by stdlib-bot)_
-   [`9502ed2`](https://github.com/stdlib-js/stdlib/commit/9502ed27e2853e312c556a48bdd7775095e66709) - **build:** replace tslint directive with eslint equivalent _(by Philipp Burckhardt)_
-   [`d73bbf4`](https://github.com/stdlib-js/stdlib/commit/d73bbf43d222f935085f8ecf7526e5f57835f74e) - **build:** replace lint directives _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-09-24)

<section class="features">

### Features

-   [`898e8e4`](https://github.com/stdlib-js/stdlib/commit/898e8e45b2ff0b16c3b7a04786f4e2577422f5b6) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`898e8e4`](https://github.com/stdlib-js/stdlib/commit/898e8e45b2ff0b16c3b7a04786f4e2577422f5b6): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`898e8e4`](https://github.com/stdlib-js/stdlib/commit/898e8e45b2ff0b16c3b7a04786f4e2577422f5b6) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_
-   [`0e39133`](https://github.com/stdlib-js/stdlib/commit/0e39133f08095cc9c319adb377306a4d0500f664) - **chore:** use strictEqual checks and resolve lint errors _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.6">

## 0.0.6 (2022-02-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.5">

## 0.0.5 (2021-08-22)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.4">

## 0.0.4 (2021-07-07)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.3">

## 0.0.3 (2021-06-27)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.2">

## 0.0.2 (2021-06-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2021-06-15)

No changes reported for this release.

</section>

<!-- /.release -->

